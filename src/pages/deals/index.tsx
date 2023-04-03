import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, slideIn, stagger } from '@/utils/animations';
import Link from 'next/link';
import { products } from '@/constants';
import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import Tag from '@/components/tag';

export type ProductType = {
  id: string;
  image: string;
  name: string;
  price: string;
  details?: string;
};

const Products = () => {
  return (
    <Box
      as={motion.div}
      variants={fadeInUp}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <HStack gap={2} py={6} justifyContent={'center'}>
        <Tag label='Stays' />
        <Tag label='Flights' />
        <Tag label='Cars Rentals' />
        <Tag label='Attractions' />
        <Tag label='Airport Taxis' />
      </HStack>
      <Flex gap={4} as={motion.div} variants={stagger} className='product-row'>
        {products.map(product => (
          <Link key={product.id} href='/deals/[id]' as={`/deals/${product.id}`}>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='card'
            >
              <motion.img
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                key={product.image}
                src={product.image}
                width={200}
                style={{ borderRadius: '4px' }}
              />
              <Box>
                <Heading size='sm'>{product.name}</Heading>
                <Text>{product.price}</Text>
              </Box>
            </motion.div>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Products;
