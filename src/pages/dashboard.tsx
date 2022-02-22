import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Dashboard(){
  return(
   <Flex flexDir={'column'} h='100vh'>
     <Header/>

     <Flex maxW={1480} w='100%' my='6' mx='auto' px='6'>
       <Sidebar/>
     </Flex>
   </Flex> 
  )
}