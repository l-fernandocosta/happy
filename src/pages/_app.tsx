import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme.styles.global';
import DrawerProvider from '../contexts/DrawerContext';
import { makeServer } from '../services/miragejs';

if(process.env.NODE_ENV === "development"){
  makeServer({environment:"development"})
};

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider theme={theme}>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </ChakraProvider>
  )
} 

export default MyApp
