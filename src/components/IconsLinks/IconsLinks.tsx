import React from 'react';
import { motion } from 'framer-motion';

import { GithubIcon } from '../Icons/GithubIcon';
import { MoonIcon } from '../Icons/MoonIcon';
import { TwitterIcon } from '../Icons/TwitterIcon';
import { LinkedInIcon } from '../Icons/LinkedInIcon';

interface SocialLink {
  icon: string;
  url: React.ReactNode;
  onPressIcon?: () => void;
}

const socialLinks: SocialLink[] = [
  { icon: 'https://www.linkedin.com/in/roycuenca/', url: <LinkedInIcon /> },
  { icon: 'https://github.com/roycuenca', url: <GithubIcon /> },
  { icon: 'https://twitter.com/Roycuenca', url: <TwitterIcon /> },
  { icon: '', url: <MoonIcon /> },
];

const IconsLinks: React.FC = () => {
  return (
    <nav className="flex items-center justify-center flex-wrap">
      {socialLinks.map((link, index) => (
        <motion.a
          href={link.icon}
          target="_blank"
          key={link.icon}
          className={index === socialLinks.length - 1 ? 'w-6 ml-3' : 'w-6 mx-3'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          {link.url}
        </motion.a>
      ))}
    </nav>
  );
};

export default IconsLinks;
