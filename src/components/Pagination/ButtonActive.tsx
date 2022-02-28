import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
interface ButtonProps extends ChakraButtonProps {
  isCurrent?: boolean;
  number: number,
  onPageChange: (page: number | undefined) => void;
};


export default function ButtonActive({ isCurrent = false, number, onPageChange }: ButtonProps) {
  if (isCurrent) {
    return (
      
        <Button
          
          width={'4'}
          fontSize={'xs'}
          size='sm'
          disabled
          _disabled={{ cursor: 'default', bg: 'green.500' }}>
          {number}
        </Button>
      
    )
  } 
   return(
      <Button
        onClick = {() => onPageChange(number)}  
        width={'4'}
        size={'sm'}
        colorScheme='whiteAlpha'
        fontSize={'xs'}>
        {number}
        
      </Button>
   )
  }

