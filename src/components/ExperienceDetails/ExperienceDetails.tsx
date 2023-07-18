import { useRef } from 'react';
import ListCircleIcon from '../ListCircleIcon/ListCircleIcon';
import { motion } from 'framer-motion';

interface ExperienceProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const ExperienceDetail: React.FC<ExperienceProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-betwee"
      style={{ marginTop: 20 }}
    >
      <ListCircleIcon reference={ref} />

      <motion.div
        initial={{ y: 90 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp; - &nbsp;
          <a
            href={companyLink}
            target="_blanck"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </div>
  );
};

export default ExperienceDetail;
