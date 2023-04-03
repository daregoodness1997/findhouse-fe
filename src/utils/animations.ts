// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const slideIn = {
  hidden: {
    opacity: 0,
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: 'beforeChildren',
    },
  },
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerProduct = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export { fadeInUp, stagger, staggerProduct, slideIn };
