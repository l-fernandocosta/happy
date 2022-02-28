import { useQuery } from "react-query";
import { api } from "../axios";

type User = {
  name: string,
  email: string, 
  id: number, 
  createdAt: string
}

interface GetUserProps {
  totalCount: number, 
  users: User[]
}


export async function getUsers(page: number) : Promise<GetUserProps> {
    const {data, headers} = await api.get(`/users`, {
      params: {
        page: page
      }
    })
    
    const totalCount = Number(headers['x-total-count'])
    const users = (data.users.map((user) => {
      return {
        id: user.id,
        email: user.email, 
        name: user.name, 
        createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
          day: "2-digit",
          month: "long",
          year:"numeric"
        })
      }
    }))
    return {
      users, 
      totalCount
    
    };
  }



export function useUsers(page:number){
  return useQuery(['users', page] , () => getUsers(page), {
    staleTime: 1000 * 5 //5 seconds 
  });

}