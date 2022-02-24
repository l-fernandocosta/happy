import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchHref?: boolean
}



export default function ActiveLink({children, shouldMatchHref = false,  ...rest}: ActiveLinkProps){
  const {asPath} = useRouter();
  let isActive = false;

  if(shouldMatchHref && asPath == rest.href || rest.as) {
    isActive = true;
  }

  if(!shouldMatchHref && (asPath.startsWith(String(rest.href)) ||
  asPath.startsWith(String(rest.as)))
  ){
    isActive= true;
    
  }

  return(
    
    <Link {...rest}>
      
      {cloneElement(children, {
        color: isActive ? 'green.500' : 'whiteAlpha'
      })}
    </Link>
  );
}