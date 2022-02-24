import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput , InputProps as ChakraInputProps, useToast} from "@chakra-ui/react";
import {  forwardRef, ForwardRefRenderFunction } from "react";
import {FieldError} from 'react-hook-form';


interface InputProps  extends ChakraInputProps {
  name: string, 
  label?: string, 
  error?: FieldError
}


const InputRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
({name, label, error = null,...rest}, ref) => {

  
  return(
    <FormControl isInvalid = {!!error}>  
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      
      <ChakraInput
        name= {name}
        id= {name}
        focusBorderColor={"green.500"}
        bg="gray.900"
        color="whiteAlpha.500"
        variant={"filled"}
        _hover={{
          bgColor: 'gray.900'
        }}
        ref ={ref}
        size='lg' 
        {...rest}
        
     />
    {!!error  && (
      
      <FormErrorMessage>
          {error.message}   
      </FormErrorMessage>
    )}
    </FormControl>

  )
}

export const Input = forwardRef(InputRef)