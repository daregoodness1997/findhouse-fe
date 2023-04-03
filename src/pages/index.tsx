import Head from 'next/head';
import Input from '@/components/inputs/inputs';
import {
  Box,
  Grid,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/animations';

export default function Home() {
  const color = useColorModeValue('gray.500', 'gray.100');

  return (
    <>
      <Head>
        <title>FindHouse</title>
        <meta name='description' content='Find your dream house' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Box
          as={motion.div}
          variants={slideIn}
          initial='hidden'
          animate='visible'
          exit='exit'
          sx={{ width: '100%' }}
        >
          <Grid placeItems={'center'} w='100%'>
            <Box
              width={{ lg: 320, base: '100%', sm: '100%' }}
              mt={{ lg: 16, base: 4, sm: 4 }}
              p={4}
            >
              <Box textAlign={'center'}>
                <Heading fontSize={'22px'} mt={4}>
                  Welcome to FindHouse
                </Heading>
                <Text color={color} fontSize={'14px'}>
                  Login or register with your mail
                </Text>
              </Box>
              <Stack my={8} gap={6}>
                <Button bg={'brand.primary'} color={'gray.100'}>
                  Continue with Google
                </Button>

                <form>
                  <Stack gap={1}>
                    <Input placeholder='Enter email here...' type='email' />
                    <Input placeholder='Enter your password...' type='text' />
                    <Button variant='secondary'>Continue</Button>
                  </Stack>
                </form>
              </Stack>
            </Box>
          </Grid>
        </Box>
      </main>
    </>
  );
}
