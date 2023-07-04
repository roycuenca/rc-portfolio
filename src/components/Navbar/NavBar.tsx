import React from 'react';

import { ROUTES } from '../../utils/Routes/Routes';
import Logo from '../Logo/Logo';
import CustomLink from '../CustomLink/CustomLink';
import IconsLinks from '../IconsLinks/IconsLinks';

const NavBar: React.FC = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <Logo />
      <nav>
        <CustomLink href={ROUTES.HOME} title="Home" customStyles="mr-4" />
        <CustomLink href={ROUTES.ABOUT} title="About" customStyles="mx-4" />
        <CustomLink
          href={ROUTES.PROJECTS}
          title="Projects"
          customStyles="mx-4"
        />
        <CustomLink href={ROUTES.CONTACT} title="Contact" customStyles="ml-4" />
      </nav>
      <IconsLinks />
    </header>
  );
};

export default NavBar;
