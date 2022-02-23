import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

export default function Geral(){
  return(
    <Box>
    <Text fontWeight={'bold'} fontSize='small' color={'gray.400'} ml='5'>GERAL</Text>

    <Stack spacing={'4'} mt='8' align={'stretch'}>
      <Link display={'flex'} alignItems='center' color={'green.400'}>
        <Icon as={RiDashboardLine} size='20'/>
        <Text ml='4'>Dashboard</Text>
      </Link>
      <Link display={'flex'} alignItems='center' >
        <Icon as={RiContactsLine} size='20' />
        <Text ml='4'>Usuários</Text>
      </Link>
    </Stack>
  </Box>
  );
}