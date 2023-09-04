import React from 'react';

type AmountDisplayProps = {
  /**
   * 指定可能な背景の色のタイプです。
   */
  variant: 'white' | 'gray' | 'dark';
  /**
   * 指定する金額です。
   */
  amount: number;
};

const AmountDisplay = ({ variant, amount }: AmountDisplayProps) => {
  let bgColor;

  switch (variant) {
    case 'white':
      bgColor = 'bg-white';
      break;
    case 'gray':
      bgColor = 'bg-stone-300';
      break;
    case 'dark':
      bgColor = 'bg-stone-600';
      break;
  }
  return (
    <div className={`${bgColor} rounded p-4 shadow-md`}>
      <span className='text-2xl font-semibold'>${amount.toFixed(2)}</span>
    </div>
  );
};

export default AmountDisplay;
