import { useRef } from 'react';
import ListCircleIcon from '../ListCircleIcon/ListCircleIcon';
import { motion } from 'framer-motion';

interface EducationProps {
  type: string;
  place: string;
  info: string;
}

const EducationDetail: React.FC<EducationProps> = ({ type, place, info }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-betwee"
      style={{ marginBottom: 20 }}
    >
      <ListCircleIcon reference={ref} />

      <motion.div
        initial={{ y: 90 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">{place}</span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </div>
  );
};

export default EducationDetail;
