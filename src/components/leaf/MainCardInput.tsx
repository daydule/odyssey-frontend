import React, { useRef } from 'react';

type Props = {
  label: string;
  handleChange: React.Dispatch<React.SetStateAction<number>>; // フォームに入力した値を他のフォームに連携するためのSet関数が入る
  value: number;
  placeholder: string;
  handleClick?: React.Dispatch<React.SetStateAction<string>>; // ユーザーが現在アクティブ状態にしているフォームを特定するためのSet関数が入る
  isActive: boolean;
};

const MainCardInput = ({ label, handleChange, value, placeholder, handleClick, isActive }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const convertedValue = e.target.value.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0));
    const result = parseInt(convertedValue, 10) || 0;
    handleChange(result);
  };

  const handleDivClick = () => {
    if (handleClick) handleClick(label);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className='flex justify-between border-b-2'>
      <label htmlFor={label}>{label}</label>
      <div className={`flex ${!isActive ? 'cursor-pointer' : ''}`} onClick={handleDivClick}>
        <input
          ref={inputRef}
          className='text-right outline-none placeholder:text-gray-700 mr-2'
          onChange={onChange}
          value={value || 0}
          placeholder={isActive && value ? String(value) : placeholder}
          id={label}
          type='tel'
        />
        {isActive && (
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
            <path d='M15 0L12.5 2.5L17.5 7.5L20 5L15 0ZM10 5L0 15V20H5L15 10L10 5Z' fill='#D3D3D3' />
          </svg>
        )}
      </div>
    </div>
  );
};

export default MainCardInput;
