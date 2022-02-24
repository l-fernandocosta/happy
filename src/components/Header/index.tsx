import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useDrawerContext } from '../../contexts/DrawerContext'
import Logo from './logo'
import Notifications from './Notifications'
import Profile from './Profile'
import Searchbox from './Searchbox'



export default function Header() {
  const isWidedVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const {onOpen} = useDrawerContext();
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
      {!isWidedVersion && (
        <IconButton
          bg='gray.800'
          aria-label='Drawer open'
          icon={<Icon as={RiMenuLine}/>}
          onClick={onOpen}
          
          />
        
      )}
      <Logo/>
      {isWidedVersion && <Searchbox/>}

      {/* Notifications and Profile */}
      <Flex align={'center'} ml='auto'>
       <Notifications/>
       <Profile showProfile = {isWidedVersion}/> 
      </Flex>
      
      
    </Flex>
  )
}