import React from 'react';

import Layout from '../Layout/Layout';
import ButtonText from '../ButtonText/ButtonText';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout customContainerStyles="py-8 flex  items-center justify-between">
        <div className="flex items-center">
          <ButtonText
            text="By Roy Cuenca"
            onPressAction="https://github.com/roycuenca"
          />
        </div>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <ButtonText text="Say Hi!" onPressAction="https://wa.me/541153837653" />
      </Layout>
    </footer>
  );
};

export default Footer;
