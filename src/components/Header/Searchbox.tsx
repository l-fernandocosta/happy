import { Flex, Icon, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export default function Searchbox() {
  return(
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
  );
}