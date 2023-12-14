import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  buttonColor: `bg-${string}`;
  buttonText: string;
  handleClick: () => void;
};

const Button = ({ buttonColor, buttonText, handleClick }: Props) => {
  const buttonBaseClass = 'rounded-[10px]';
  const buttonClass = twMerge(buttonBaseClass, buttonColor);

  return <input className={buttonClass} type='button' value={buttonText} onClick={() => handleClick()} />;
};

export default React.memo(Button);
