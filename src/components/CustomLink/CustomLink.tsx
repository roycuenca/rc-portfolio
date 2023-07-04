import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface CustomLinkProps {
  href: string;
  title: string;
  customStyles?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  customStyles,
}) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${customStyles} relative group }`}>
      {title}
      <span
        className={`
inline-block
					h-[1px]  
					bg-dark 
					absolute 
					left-0 
					-bottom-0.5
					group-hover:w-full
					transition-[width]
					ease
					duration-300
					${router.asPath === href ? 'w-full' : 'w-0'}
					`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
