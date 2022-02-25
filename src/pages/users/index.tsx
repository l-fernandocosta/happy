import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

import { useEffect } from "react";
import { RiAddLine } from "react-icons/ri";

import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";

import { useQuery } from 'react-query'



export default function UserList() {
  //hooks
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const variant = useBreakpointValue({
    base: 'outline',
    md: 'solid'
  });

  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch("http://localhost:3000/api/users")
    const data = await response.json()
    const users = (data.users.map((user) => {
      return {
        id: user.id,
        email: user.email, 
        name: user.name, 
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: "2-digit",
          month: "long",
          year:"numeric"
        })
      }
    }))


    return users;
  }, {
    staleTime: 1000 * 5 //5 seconds 
  });


  return (
    <Box overflowX={['auto', 'hidden']}>
      <Header />
      <Flex w={'100%'} my='6' maxWidth={1480} mx='auto' padding={'6'}>
        <Sidebar />
        <Box flex={'1'} bg='gray.800' p={'6'} borderRadius='6' >
          <Flex justify={'space-between'} mb="8" align={'center'}>
            <Heading size='sm' fontWeight={'normal'} color="gray.500">USUÁRIOS</Heading>
            <Link href={'/users/create'} passHref>
              <Button
                variant={variant}
                as="a"
                colorScheme={'whatsapp'}
                leftIcon={<Icon
                  as={RiAddLine}

                />}
                size='sm'>Criar usuário
              </Button>
            </Link>
          </Flex>
          {isLoading ? (
            <Flex justify={"center"}><Spinner></Spinner></Flex>

          ) : error ? (
            <Text align={"center"}>Não conseguimos encontrar os dados 😢</Text>
          ) : (
            <>
              <Table colorScheme={'whiteAlpha'}>

                <Thead >
                  <Tr>
                    <Th><Checkbox colorScheme={'whatsapp'} px='6' /></Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de Cadastro</Th>}

                  </Tr>
                </Thead>

                <Tbody>
                  {data.map((user) => (
                  <Tr key={user.id}>
                    <Td><Checkbox colorScheme={'whatsapp'} px='6'/></Td>
                    <Td>
                      <Box>
                        <Text fontWeight={'bold'}>{user.name}</Text>
                        <Text fontSize={'sm'} color='gray.500'>{user.email}</Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td fontWeight={'light'}>{user.createdAt}</Td>}


                  </Tr>))}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>

      </Flex>


    </Box>
  )
}