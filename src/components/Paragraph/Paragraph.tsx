import React from 'react';

interface ParagraphProps {
  text: string;
  customStyles?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, customStyles }) => (
  <p className={`font-medium ${customStyles}`}>{text}</p>
);

export default Paragraph;
