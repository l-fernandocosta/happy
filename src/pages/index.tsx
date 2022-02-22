import { Button, Stack, Flex } from "@chakra-ui/react"
import { Input } from "../components/Input"

export default function SignIn() {
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
      >
        <Stack spacing={"4"}>
          <Input type={'email'} name={'email'} label='E-mail' placeholder="darthdaver@outlook.com"></Input>
          <Input type={'password'} name={'Password'} label='Password' placeholder="**********"></Input>

          <Button colorScheme={"whatsapp"} type={"submit"} size="lg">Entrar</Button>

        </Stack>
      </Flex>

    </Flex>
  )
}
