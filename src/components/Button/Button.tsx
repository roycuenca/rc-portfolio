import React, { ReactNode } from 'react';

import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

interface ButtonProps {
  action: Url;
  children: ReactNode;
  customStyles?: string;
  download?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  action,
  customStyles,
  children,
  download,
}) => (
  <Link
    href={action}
    target="_blanck"
    className={`flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark ${customStyles}`}
    download={download}
  >
    {children}
  </Link>
);

export default Button;
