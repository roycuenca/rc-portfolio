import React from 'react';
import { motion } from 'framer-motion';

interface SkillProps {
  name: string;
  xCoord?: string;
  yCoord?: string;
}

const Skill: React.FC<SkillProps> = ({ name, xCoord, yCoord }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{
        scale: 1.1,
      }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: xCoord, y: yCoord }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default Skill;
