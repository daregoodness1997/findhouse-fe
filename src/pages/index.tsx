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
        <Grid placeItems={'center'}>
          <Box width={320} mt={16}>
            <Box textAlign={'center'}>
              <Heading fontSize={'22px'} mt={4}>
                Welcome to FindHouse
              </Heading>
              <Text color={color} fontSize={'14px'}>
                Login or register with your mail
              </Text>
            </Box>

            <Stack my={8} gap={1}>
              <Button bg={'brand.primary'} color={'gray.100'}>
                Continue with Google
              </Button>
              <Input placeholder='Enter email here...' type='email' />
              <Button variant='secondary'>Continue</Button>
            </Stack>
          </Box>
        </Grid>
      </main>
    </>
  );
}
