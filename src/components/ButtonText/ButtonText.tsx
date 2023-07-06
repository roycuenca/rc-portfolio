import Link from 'next/link';
import React from 'react';

interface ButtonTextProps {
  text: string;
  onPressAction: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({ text, onPressAction }) => {
  return (
    <Link
      href={onPressAction}
      target="_blanck"
      className="ml-4 text-lg font-medium capitalize text-dark underline"
    >
      {text}
    </Link>
  );
};

export default ButtonText;
