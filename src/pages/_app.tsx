import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AnimatePresence mode='wait'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </ChakraProvider>
  );
}
