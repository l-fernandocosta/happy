import {createServer, Factory, Model} from 'miragejs';
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
      server.createList("user", 10)
    },

    routes(){
      this.namespace = "api";
       
      this.get("/users");
      this.post("/users");

      this.timing=2000;
      this.namespace='';
      this.passthrough();
    }
  })
  return server; 
}


