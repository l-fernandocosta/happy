import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import Automacao from "./Automacao";
import Geral from "./Geral";

export default function Sidebar() {
  return (

    <Box as='aside' w='64' mr='8'>
      <Stack spacing={'12'} align='flex-start'>
        <Geral/>
        <Automacao/>
      </Stack>
    </Box>
  )
}