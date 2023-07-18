import React, { useRef } from 'react';
import ExperienceDetail from '../ExperienceDetails/ExperienceDetails';
import { userEducation } from '../../utils/Const/Education/Education';
import { motion, useScroll } from 'framer-motion';
import EducationDetail from '../EducationDetails/EducationDetails';

const Education: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between my-8">
          {userEducation.map((education) => (
            <motion.li
              key={education.info}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '100%',
                display: 'flex',
              }}
            >
              <EducationDetail
                key={education.info}
                type={education?.type}
                place={education?.place}
                info={education?.info}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
