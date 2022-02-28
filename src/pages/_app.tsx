import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme.styles.global';
import DrawerProvider from '../contexts/DrawerContext';
import { makeServer } from '../services/miragejs';
import { QueryClientProvider, } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../services/queryClient';


if(process.env.NODE_ENV === "development"){
  makeServer({environment:"development"})
};



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
      <ChakraProvider theme={theme}>
        <DrawerProvider>
          <Component {...pageProps} />
        </DrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
} 

export default MyApp
