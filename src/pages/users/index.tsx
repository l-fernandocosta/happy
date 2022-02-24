import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true, 
  });

  const variant = useBreakpointValue({
    base: 'outline',
    md: 'solid'
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
          <Table colorScheme={'whiteAlpha'}>

            <Thead >
              <Tr>
                <Th><Checkbox colorScheme={'whatsapp'} px='6'/></Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
                
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td><Checkbox colorScheme={'whatsapp'} px='6' /></Td>
                <Td>
                  <Box>
                    <Text fontWeight={'bold'}>Fernando Costa</Text>
                    <Text fontSize={'sm'} color='gray.500'>fernandocostadev98@gmail.com</Text>
                  </Box>
                </Td>
               {isWideVersion && <Td fontWeight={'light'}>22 de Fevereiro, 2022</Td>}
              

              </Tr>
            </Tbody>
          </Table>
          <Pagination/>
        </Box>

      </Flex>


    </Box>
  )
}