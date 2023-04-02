import React from 'react';
import { motion } from 'framer-motion';
import { stagger } from '@/utils/animations';
import styles from '@/styles/Home.module.css';

interface Props {}

function Wrapper<P>(Component: React.ComponentType<P> & {}, idName?: string) {
  function HOC(props: P) {
    return (
      <main className={styles.wrapper}>
        <motion.section
          id={idName}
          variants={stagger}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.25 }}
          className={styles.container}
        >
          {/* @ts-ignore */}
          <Component {...props} />
        </motion.section>
      </main>
    );
  }
  return HOC;
}

export default Wrapper;
