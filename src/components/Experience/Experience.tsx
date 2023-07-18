import React, { useRef } from 'react';
import ExperienceDetail from '../ExperienceDetails/ExperienceDetails';
import { workExperience } from '../../utils/Const/Experience/Experience';
import { motion, useScroll } from 'framer-motion';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          {workExperience.map((experience) => (
            <motion.li
              key={experience.work}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <ExperienceDetail
                key={experience.work}
                position={experience?.position}
                company={experience?.company}
                companyLink={experience?.companyLink}
                time={experience?.time}
                address={experience?.address}
                work={experience?.work}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
