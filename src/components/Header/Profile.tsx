import {Text, Avatar, Box, Flex } from "@chakra-ui/react";

export default function Profile(){
  return(
    <Flex align= "center" >
    <Box color="gray.300" mr='4' textAlign='right'>
      <Text>Fernando Costa</Text>
      <Text fontSize={'small'}>fernandocostadev98@gmail.com</Text>
    </Box>
    <Avatar size={'md'} name='Fernando Costa' src='https://github.com/l-fernandocosta.png'/>
  </Flex>
  );
}