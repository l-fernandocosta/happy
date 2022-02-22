import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export default function Sidebar() {
  return (

    <Box as='aside' w='64' mr='8'>
      <Stack spacing={'12'} align='flex-start'>
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
      </Stack>

    </Box>
  )
}