import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme.styles.global';
import DrawerProvider from '../contexts/DrawerContext';

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
