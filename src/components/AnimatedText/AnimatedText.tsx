import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

interface AnimatedTextProps {
  text: string;
  customTextStyles?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  customTextStyles,
}) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full capitalize ${customTextStyles} text-8xl	 text-dark font-bold`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;