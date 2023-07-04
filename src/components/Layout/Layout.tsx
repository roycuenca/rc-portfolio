import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  customContainerStyles?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, customContainerStyles }) => (
  <div
    className={`
	w-full
	h-full
	inline-block
	z-0
	bg-light
	p-32
	${customContainerStyles}`}
  >
    {children}
  </div>
);

export default Layout;
