import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, Stack, useBreakpointValue, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import Sidebar from "../../components/Sidebar";

export default function CreateUser() {
  const variant = useBreakpointValue({
    base: 'outline',
    md: 'solid'
  });

  return(
    <Box>
      <Header/>
      <Flex width="100%" maxWidth={1480} my='6'  mx='auto' px='6'>
        <Sidebar/>

        <Box flex={'1'} bg='gray.800'  p='6' borderRadius={'8'} >
          <Heading fontSize={'3xl'}>Criar usuário <Icon as= {RiPencilLine}/></Heading>
          <Divider my={'6'} width='20' w='100%'></Divider>

          <VStack spacing={'6'} >
            <SimpleGrid minChildWidth={'240px'} spacing='8' w={'100%'}>
              <Input name="Nome" label="Seu nome"/>
              <Input name="email" label="E-mail" type={'email'}/>
            </SimpleGrid>

            <SimpleGrid minChildWidth={'240px'} spacing='8' w='100%'>
               <Input name="password" label="Password" type={'password'}/>
               <Input name="password-confirmation" label="Confirm the password" type={'password'}/>
            </SimpleGrid>
          </VStack>


          <Flex  justify='flex-end' mt='8' >
            <HStack spacing={'4'}>
              <Link href={'/users'} passHref>
                <Button
                  variant={variant}
                  as='a'
                  colorScheme={'whiteAlpha'}>Cancelar</Button>
              </Link>

              <Button
                as='a'
                colorScheme={'whatsapp'}
                variant={variant}
                >Salvar</Button>

            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
      

  )
}