import Head from 'next/head';
import Input from '@/components/inputs/inputs';

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
        <div>
          <Input placeholder='Basic usage' />
        </div>
      </main>
    </>
  );
}
