import { Button, Stack, Flex, toast, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import {Rings} from 'react-loader-spinner';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useRouter } from "next/router";


interface SignInData{
  name: string,
  password: string
}


export default function SignIn() {
  const {push} = useRouter();
  const schema = yup.object({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('You shall not pass!')
  })



  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    resolver: yupResolver(schema)
  });

  const handleSignIn = async (d: SignInData) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    push('/dashboard')
  }

  return (
    <Flex
      align='center'
      justify='center'
      w='100vw'
      h='100vh'>
      <Flex as='form'
        w='100%' maxW={360}
        bg='gray.800'
        p="8"
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
        
        >
        <Stack spacing={"4"}>
          <Input
            error={errors?.email}
            type={'email'}
            name={'email'}
            label='E-mail'
            placeholder="darthdaver@outlook.com"
            {...register('email')}></Input>
            
          <Input
            error={errors?.password}
            type={'password'}
            name={'Password'}
            label='Password'
            placeholder="**********"
            {...register('password')}></Input>

          <Button
            spinner={<Rings color="#ffffff" height={70} width={70}/>}
            colorScheme={"whatsapp"}
            type={"submit"}
            size="lg"
            isLoading= {isSubmitting}
            
            >Entrar</Button>

        </Stack>
      </Flex>

    </Flex>
  )
}
