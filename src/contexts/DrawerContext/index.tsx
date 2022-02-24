import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface ChildrenProps{
  children: ReactNode;
}
type SideBarDrawerData = UseDisclosureReturn;

const DrawerContext = createContext({} as SideBarDrawerData)

export default function DrawerProvider({children}: ChildrenProps){
  const disclosure = useDisclosure({});
  const {asPath} = useRouter(); 



  useEffect(() => {
    disclosure.onClose();
  }, [asPath])

  return(
    <DrawerContext.Provider value={disclosure}>
      {children}
    </DrawerContext.Provider>
  )
}


export const useDrawerContext = () => useContext(DrawerContext)