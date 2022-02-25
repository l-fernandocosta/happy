import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme.styles.global';
import DrawerProvider from '../contexts/DrawerContext';
import { makeServer } from '../services/miragejs';
import { QueryClient, QueryClientProvider, } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'


if(process.env.NODE_ENV === "development"){
  makeServer({environment:"development"})
};

const queryClient = new QueryClient();

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
