import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w={'100%'} my='6' maxWidth={1480} mx='auto' padding={'6'}>
        <Sidebar />
        <Box flex={'1'} bg='gray.800' p={'6'}>
          <Flex justify={'space-between'} mb="8" align={'center'}>
            <Heading size='sm' fontWeight={'normal'} color="gray.500">USUÁRIOS</Heading>
            <Button as="a" colorScheme={'whatsapp'} leftIcon={<Icon as={RiAddLine} />} size='sm'>Criar usuário </Button>
          </Flex>
          <Table colorScheme={'whiteAlpha'}>

            <Thead >
              <Tr>
                <Th><Checkbox colorScheme={'whatsapp'} px='6'/></Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th></Th>
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
                <Td fontWeight={'bold'}>22/fevereiro/2022</Td>
                <Td><Button colorScheme={'purple'} leftIcon={<Icon as={RiPencilLine} fontSize='22' />}>
                  Editar</Button></Td>

              </Tr>
            </Tbody>


          </Table>
        </Box>

      </Flex>


    </Box>
  )
}