import { Flex } from "@chakra-ui/react";

export default function Logo(){
  return(
    <Flex as='text'
    fontSize='3xl'
    fontWeight={'bold'}
    w='40'
    px='4'
    letterSpacing={'tight'}
    >HAPPY <Flex as='span' color={'green.400'}>.</Flex></Flex>
  );
}