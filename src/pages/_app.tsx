import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from '../styles/theme';

import { QueryClient, QueryClientProvider } from 'react-query';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerontext';
import { makeServer } from '../services/mirage';

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  makeServer();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
