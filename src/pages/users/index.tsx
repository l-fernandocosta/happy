import { Box, Button, Checkbox, Flex, Heading, Icon, Link, 
  Popover, Spinner, Table, Tbody, Td, Text, 
  Th, Thead, Tr, useBreakpoint, useBreakpointValue,
  PopoverTrigger, 
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody} from "@chakra-ui/react";
import NextLink  from "next/link";
import { useState } from "react";

import { RiAddLine, RiRefreshLine } from "react-icons/ri";

import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { api } from "../../services/axios";

import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";



export default function UserList() {

  const [page, setPage] = useState(1);

  //hooks
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const variant = useBreakpointValue({
    base: 'outline',
    md: 'solid'
  });

  const { data, isLoading, error, isFetching, refetch } = useUsers(page)



  async function  handlePrefetchUser(userId: number) {
    await queryClient.prefetchQuery(['users', userId], async () => {
      const response = await api.get(`/users/${userId}`);
      return response.data
    }, {
      staleTime: 1000 * 60 * 10 //10 minutes
    })
  }

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
              <NextLink href={'/users/create'} passHref>
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
              </NextLink>
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
                  {data.users.map((user) => (
                    <Tr key={user.id}>
                      <Td><Checkbox colorScheme={'whatsapp'} px='6' /></Td>
                        <Td >
                          <Box >
                           <Popover>
                             <PopoverTrigger>
                               <Link
                                  _hover={{color:"whatsapp.400"}}
                                  onMouseEnter={()=> {handlePrefetchUser(user.id)}}>
                                  <Text fontWeight={'bold'}>{user.name}</Text>
                                </Link> 
                               
                             </PopoverTrigger>
                             <PopoverContent bg="whatsapp.400" color="white">
                                <PopoverHeader fontWeight={"bold"}>Usuário: {user.email}</PopoverHeader>
                                  <PopoverArrow/>
                                  <PopoverCloseButton/>
                                  <PopoverBody>
                                    Data de criação: {user.createdAt}

                                  </PopoverBody>
                             </PopoverContent>
                           </Popover>
                           
                            <Text fontSize={'sm'} color='gray.500'>{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td fontWeight={'light'}>{user.createdAt}</Td>}
                      



                    </Tr>))}
                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage} />
            </>
          )}
        </Box>

      </Flex>


    </Box>
  )
}