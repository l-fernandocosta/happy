import {Text, Avatar, Box, Flex } from "@chakra-ui/react";

interface showProfileProps{
  showProfile?: boolean;
}


export default function Profile({showProfile}: showProfileProps){
  return(
    <Flex align= "center" >
      {showProfile && (
        <Box color="gray.300" mr={'4'} textAlign='right'>
        <Text>Fernando Costa</Text>
        <Text fontSize={'small'}>fernandocostadev98@gmail.com</Text>
      </Box>
      )}
    <Avatar size={'md'} name='Fernando Costa' src='https://github.com/l-fernandocosta.png' />
  </Flex>
  );
}