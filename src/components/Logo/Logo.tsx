import Link from 'next/link';
import React from 'react';
import { ROUTES } from '../../utils/Routes/Routes';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2x1 font-bold"
        href={ROUTES.HOME}
        whileHover={{
          scale: 1.2,
          color: '#1b1b1b',
          backgroundColor: '#ffffff',
        }}
      >
        RC
      </MotionLink>
    </div>
  );
};

export default Logo;
