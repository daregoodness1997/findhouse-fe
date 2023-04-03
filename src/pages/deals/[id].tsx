import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerProduct } from '@/utils/animations';
import { ProductType } from '.';
import Link from 'next/link';
import { products } from '@/constants';
import { useRouter } from 'next/router';
import { Text } from '@chakra-ui/react';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.filter(p => p.id === id);
  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <div className='fullscreen'>
        <div className='product'>
          <motion.div
            className='img'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <motion.img
              key={product[0]?.image}
              src={product[0]?.image}
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
          <div className='product-details'>
            <motion.div variants={staggerProduct} className='inner'>
              <Link href='/products'>
                <motion.div variants={fadeInUp}>
                  <a className='go-back'>Back to products</a>
                </motion.div>
              </Link>
              <motion.div variants={fadeInUp}>
                <Text className='category'>Protein</Text>
              </motion.div>
              <motion.h1 variants={fadeInUp}>{product[0]?.name}</motion.h1>
              <motion.p variants={fadeInUp}>{product[0]?.details}</motion.p>
              <motion.div variants={fadeInUp} className='additonals'>
                <span>Soy Free</span>
                <span>Gluten Free</span>
              </motion.div>
              <motion.div variants={fadeInUp} className='qty-price'>
                <div className='qty'>
                  <div className='minus'>-</div>
                  <div className='amount'>1</div>
                  <div className='add'>+</div>
                </div>
                <span className='price'>{product[0]?.price}</span>
              </motion.div>
              <motion.div variants={fadeInUp} className='btn-row'>
                <button className='add-to-cart'> Add to cart</button>
                <button className='subscribe'> Subscribe</button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
