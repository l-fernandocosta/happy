import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export default function Automacao(){
  return(
    <Box>
    <Text fontWeight={'bold'} fontSize='small' color={'gray.400'} ml='5'>AUTOMAÇÃO</Text>

    <Stack spacing={'4'} mt='8' align={'stretch'}>
      <Link display={'flex'} alignItems='center' >
        <Icon as={RiInputMethodLine} size='20' />
        <Text ml='4'>Formulários</Text>
      </Link>
      <Link display={'flex'} alignItems='center' >
        <Icon as={RiGitMergeLine} />
        <Text ml='4'>Automação</Text>
      </Link>
    </Stack>
  </Box>
  );
}