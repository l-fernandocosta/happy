import { Avatar, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'



export default function Header() {
  return (
    <Flex
      as='header'
      w={'100%'}
      h={'20'}
      maxW={1480}
      mx='auto'
      px='6'
      mt='4'
      align='center'>

      {/* logo */}
      <Flex as='text'
        fontSize='3xl'
        fontWeight={'bold'}
        w='40'
        px='4'
        letterSpacing={'tight'}
      >happy <Flex as='span' color={'green.400'}>.</Flex></Flex>

      {/* searchbox */}
      <Flex
        as='label'
        flex={'1'}
        py='3'
        ml="6"
        px='4'
        maxW={400}
        alignSelf='center'
        color={'gray.200'}
        position='relative'
        bg={'gray.800'}
        borderRadius='full'
      >
        <Input
          color={'gray.50'}
          variant='unstyled'
          placeholder='Buscar na plataforma'
          _placeholder={{ color: 'gray.500' }}
          px='4'
          mr='4' />
        <Icon as={FiSearch} fontSize='2xl' />
      </Flex>

      {/* Notifications and Add icons */}
      <Flex align={'center'} ml='auto'>
        <HStack
          spacing="8"
          mx='8'
          pr='8'
          py= "1"
          color='gray.300'
          borderRightWidth={2}
          borderColor='gray.700'
          >
          <Icon as={RiNotificationLine} fontSize='20'/>
          <Icon as={RiUserAddLine} fontSize='20'/>
        </HStack>

        <Flex align= "center" >
          <Box color="gray.300" mr='4' textAlign='right'>
            <Text>Fernando Costa</Text>
            <Text fontSize={'small'}>fernandocostadev98@gmail.com</Text>
          </Box>
          <Avatar size={'md'} name='Fernando Costa' src='https://github.com/l-fernandocosta.png'/>
        </Flex>
      </Flex>
      
      
    </Flex>
  )
}