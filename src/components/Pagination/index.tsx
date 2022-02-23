import { Box, Button, HStack, Stack } from "@chakra-ui/react";

export default function Pagination() {
  return (
    <Stack spacing={'6'} mt='8' direction='row' justify={'space-between'} >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong> usuários
      </Box>
      <HStack >
        <Button
          width={'4'}
          fontSize={'xs'}
          size='sm'
          disabled
          _disabled={{ cursor: 'default', bg: 'green.500' }}
        >
          1
        </Button>
        
        <Button
          width={'4'}
          size={'sm'}
          colorScheme='whiteAlpha'
          fontSize={'xs'}>
          2
        </Button>

        <Button
          width={'4'}
          size={'sm'}
          colorScheme='whiteAlpha'
          fontSize={'xs'}>
          3
        </Button>
        <Button
          width={'4'}
          size={'sm'}
          colorScheme='whiteAlpha'
          fontSize={'xs'}>
          4
        </Button>
      </HStack>

    </Stack>
  )
}