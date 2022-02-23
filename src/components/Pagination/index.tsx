import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import ButtonActive from "./ButtonActive";

export default function Pagination() {
  return (
    <Stack spacing={'6'} mt='8' direction='row' justify={'space-between'} >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong> usuários
      </Box>
      <HStack>
        <ButtonActive number={1} isCurrent/>
        <ButtonActive number={2} />
        <ButtonActive number={3} />
        <ButtonActive number={4} />

      </HStack>
    </Stack>
  )
}