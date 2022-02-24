import { Box, color, Drawer, DrawerBody, DrawerCloseButton, DrawerContent,
       DrawerHeader, DrawerOverlay, Icon, useBreakpointValue } from "@chakra-ui/react";
import NavDrawer from "./NavDrawer";

import { useDrawerContext } from "../../contexts/DrawerContext";



export default function Sidebar() {

  const {isOpen, onClose} = useDrawerContext();

  const isDrawerWided = useBreakpointValue({
    base: true,
    lg: false
  })
  


  if (isDrawerWided){
    return(
      <Drawer isOpen= {isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay>
          <DrawerContent bg={'gray.800'}>
          <DrawerHeader>Navigation</DrawerHeader>
            <DrawerCloseButton mt={'6'}>
            </DrawerCloseButton>

            <DrawerBody>
                <NavDrawer/>
              </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
 
    )
  }
  return (
    <Box as='aside' w='64' mr='8'>
      <NavDrawer/>
    </Box>
  )
}