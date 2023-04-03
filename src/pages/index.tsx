import Head from 'next/head';
import Input from '@/components/inputs/inputs';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>FindHouse</title>
        <meta name='description' content='Find your dream house' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Grid placeItems={'center'}>
          <Box width={320} mt={8}>
            <Box textAlign={'center'}>
              <Image
                src='assets/fh-logo.svg'
                width={48}
                height={48}
                alt='find houselogo'
                style={{ display: 'block', margin: 'auto' }}
              />
              <Heading fontSize={'22px'} mt={4}>
                Welcome to FindHouse
              </Heading>
              <Text color='#eee'>Login or register with your mail</Text>
            </Box>

            <Input placeholder='Enter email here...' />
          </Box>
        </Grid>
      </main>
    </>
  );
}
