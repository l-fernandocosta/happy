import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

import { RiAddLine, RiRefreshLine } from "react-icons/ri";

import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";

import { useUsers } from "../../services/hooks/useUsers";



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

  const { data, isLoading, error, isFetching, refetch} = useUsers()

  return (
    <Box overflowX={['auto', 'hidden']}>
      <Header />
      <Flex w={'100%'} my='6' maxWidth={1480} mx='auto' padding={'6'}>
        <Sidebar />
        <Box flex={'1'} bg='gray.800' p={'6'} borderRadius='6' >
          <Flex justify={'space-between'} mb="8" align={"center"}>
            
            <Heading
              
              size='sm'
              fontWeight={'normal'}
              color="gray.500">USUÁRIOS
              {!isLoading && isFetching && (<Spinner size={"sm"} ml="2"></Spinner>)}
              </Heading>
              <Flex>
              <Link href={'/users/create'} passHref>
                <Button

                  mr={"2"}
                  variant={variant}
                  as="a"
                  colorScheme={'whatsapp'}
                  leftIcon={<Icon
                    as={RiAddLine}

                  />}
                  size='sm'>Criar usuário
                </Button>
              </Link>
              <Button
                isLoading={isFetching}
                colorScheme={"facebook"}
                size="sm"
                rightIcon={<RiRefreshLine />}
                // @ts-ignore
                onClick={refetch}>Refresh</Button>      

              </Flex>

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