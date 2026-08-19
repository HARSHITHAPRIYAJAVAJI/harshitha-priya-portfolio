import type { Variants } from 'framer-motion';

export const fadeIn = (delay: number = 0, duration: number = 0.6): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export const fadeUp = (delay: number = 0, duration: number = 0.7, distance: number = 24): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export const fadeLeft = (delay: number = 0, duration: number = 0.7): Variants => ({
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export const fadeRight = (delay: number = 0, duration: number = 0.7): Variants => ({
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const cardHoverVariants: Variants = {
  initial: { y: 0, borderColor: '#242424' },
  hover: {
    y: -4,
    borderColor: 'rgba(212, 175, 55, 0.45)',
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const buttonHoverVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
  },
};
