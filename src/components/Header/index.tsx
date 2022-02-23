import { Flex } from '@chakra-ui/react'
import Logo from './logo'
import Notifications from './Notifications'
import Profile from './Profile'
import Searchbox from './Searchbox'



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

      <Logo/>
      <Searchbox/>

      {/* Notifications and Profile */}
      <Flex align={'center'} ml='auto'>
       <Notifications/>
       <Profile/> 
      </Flex>
      
      
    </Flex>
  )
}