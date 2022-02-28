import {ActiveModelSerializer, createServer, Factory, Model, Response} from 'miragejs';
import faker from "@faker-js/faker"

type UserProps = {
  name: string,
  email: string,
  created_at: string,
}



export function makeServer({environment = 'test'} = {}){
  let server = createServer({
    environment, 
    models: {
      user: Model.extend<Partial<UserProps>>({}), 
    }, 
    serializers: {
      application: ActiveModelSerializer
    },

    factories: {
      user: Factory.extend({
        name(i) {
          return `User ${i + 1 }`
        },
        email(){
          return faker.internet.email().toLowerCase()
        },
        createdAt() {
          
          return faker.date.recent(10)
        }
      })
    },

    seeds(server) {
      server.createList("user", 200)
    },

    routes(){
      this.namespace = "api";
       
      this.get("/users", function(schema, request) {
        const {page = 1, per_page = 10} = request.queryParams;
        const total = schema.all('user').length
        
        const pageStart =  (Number(page) - 1) * Number(per_page)
        const pageEnd  = pageStart + Number(per_page)

        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)
        
        return new Response(
          200, 
          {'x-total-count': String(total)},
          {users}
        )
      });
      this.post("/users");
      this.get("/users/:id")

      this.timing=1000;
      this.namespace='';
      this.passthrough();
    }
  })  
  return server; 
}


