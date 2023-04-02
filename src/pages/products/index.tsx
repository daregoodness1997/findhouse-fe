import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/utils/animations';
import Link from 'next/link';
import { products } from '@/constants';

export type ProductType = {
  id: string;
  image: string;
  name: string;
  price: string;
  details?: string;
};

const Products = () => {
  return (
    <div>
      <motion.div variants={stagger} className='product-row'>
        {products.map(product => (
          <Link
            key={product.id}
            href='/products/[id]'
            as={`/products/${product.id}`}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='card'
            >
              <span className='category'>Protein</span>
              <motion.img
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                key={product.image}
                src={product.image}
                width={250}
              />
              <div className='product-info'>
                <h4>{product.name}</h4>
                <span>{product.price}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;
