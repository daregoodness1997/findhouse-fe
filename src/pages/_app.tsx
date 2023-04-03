import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@/components/layout';
import theme from '@/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode='wait'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </ChakraProvider>
  );
}
