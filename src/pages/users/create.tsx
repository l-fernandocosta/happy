//chakra imports
import { Box, Button, Divider, Flex, 
  Heading, HStack, Icon, 
  SimpleGrid, useBreakpointValue, VStack } from "@chakra-ui/react";

import Link from "next/link";

import { RiPencilLine } from "react-icons/ri";
// components
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import Sidebar from "../../components/Sidebar";
//forms
import * as yup from 'yup';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { useMutation } from "react-query";
import { api } from "../../services/axios";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";


interface CreateUserData {
  name: string, 
  email: string, 
  password: string, 
  pass_conformation: string,
}


const createUserSchema= yup.object({
  nome: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'Mínimo de 6 caracteres'),
  pass_confirmation: yup.string().oneOf([null,yup.ref('password')], 'Senhas diferentes, tente novamente')
})

export default function CreateUser() {
  // hooks
  const {formState: {errors, isSubmitting}, register, handleSubmit} = useForm({
    resolver: yupResolver(createUserSchema)
  });

  const variant = useBreakpointValue({
    base: 'outline',
    md: 'solid'
  });

  const {push} = useRouter();
  const createUser = useMutation(async (user:CreateUserData) => {
    const response = await api.post("/users", {
      user: {
        ...user,
        created_at: new Date().toLocaleDateString("pt-BR")
      }
    })
    return response.data.user;
  
  }, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['users', 1])
      push("/users")
    }
  })


  const handleCreateUser: SubmitHandler<CreateUserData> = async (values:CreateUserData) => {
    await new Promise((resolve) =>  setTimeout(resolve, 2000))
    createUser.mutateAsync(values);
  }

  return(
    <Box>
      <Header/>
      <Flex width="100%" maxWidth={1480} my='6'  mx='auto' px='6'>
        <Sidebar/>

        <Box as='form' flex={'1'} bg='gray.800'  p='6' borderRadius={'8'} onSubmit={handleSubmit(handleCreateUser)}>
          <Heading fontSize={'3xl'}>Criar usuário <Icon as= {RiPencilLine}/></Heading>
          <Divider my={'6'} width='20' w='100%'></Divider>

          <VStack spacing={'6'} >
            <SimpleGrid minChildWidth={'240px'} spacing='8' w={'100%'}>
             
              <Input
                error={errors?.nome}
                name="Nome"
                label="Seu nome"
                {...register('nome')} /> 

              <Input
                name="email"
                label="E-mail"
                error= {errors?.email}
                type={'email'}
                {...register('email')}/>
            </SimpleGrid>

            <SimpleGrid minChildWidth={'240px'} spacing='8' w='100%'>
               <Input
                 name="password"
                 label="Password"
                 type={'password'}
                 error={errors?.password}
                 {...register('password')} />
               <Input
                 name="password-confirmation"
                 label="Confirm the password"
                 type={'password'}
                 error={errors?.pass_confirmation}
                 {...register('pass_confirmation')} />
            </SimpleGrid>
          </VStack>


          <Flex  justify='flex-end' mt='8' >
            <HStack spacing={'4'}>
              <Link href={'/users'} passHref>
                <Button variant={variant} as='a'colorScheme={'whiteAlpha'}>Cancelar</Button>
              </Link>
              <Button colorScheme={'whatsapp'}variant={variant} isLoading = {isSubmitting}type='submit'>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
      

  )
}