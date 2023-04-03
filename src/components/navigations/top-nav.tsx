import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Text,
  useColorMode,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../button';

interface Props {}

const TopNav: React.FC<Props> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} sx={{ p: 4 }}>
      <Link href='/'>
        <Flex gap={2} alignItems='center'>
          <Image
            src='assets/fh-logo.svg'
            width={48}
            height={48}
            alt='find houselogo'
          />
          <Text fontSize={22} fontWeight={'bold'}>
            Find House
          </Text>
        </Flex>
      </Link>

      <IconButton
        aria-label='toggle-switch'
        onClick={toggleColorMode}
        borderRadius={24}
      >
        {colorMode === 'light' ? <Icon as={MoonIcon} /> : <Icon as={SunIcon} />}
      </IconButton>
    </Flex>
  );
};

export default TopNav;
