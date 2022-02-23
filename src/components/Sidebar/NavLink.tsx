import { Icon, Link, Text, LinkProps as ChakraLinkProps} from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps{
  title: string, 
  icon: ElementType, 
}


export default function NavLink({title, icon, ...rest}){
  return(
    <Link display={'flex'} alignItems='center'  {...rest}>
      <Icon as={icon} size='20'/>
      <Text ml='4'>{title}</Text>
    </Link>
  )
}