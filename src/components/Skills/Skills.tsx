import React from 'react';
import { motion } from 'framer-motion';
import Skill from './components/Skill';
import { skillsPosition } from '../../utils/Const/SkillsPosition/SkillsPosition';

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        {skillsPosition.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            xCoord={`${skill.xCoord}vw`}
            yCoord={`${skill.yCoord}vw`}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
