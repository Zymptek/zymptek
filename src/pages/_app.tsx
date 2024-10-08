import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../_theme';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';
import Footer from '@/components/Footer';
import { initializeGTM } from '@/app/lib/gtm';
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initializeGTM();
  }, []);
  
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Background>
      <Component {...pageProps} />
      <Footer/>
      </Background>
    </ChakraProvider>
  );
}

export default App;