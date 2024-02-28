import { useEffect, useRef } from 'react';
import { convertValueToDisplayText } from '../../utils/formatting';

type Props = {
  label: string;
  handleChange: React.Dispatch<React.SetStateAction<number>>; // フォームに入力した値を他のフォームに連携するためのSet関数が入る
  value: number;
  placeholder: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>; // ユーザーが現在アクティブ状態にしているフォームを特定するためのSet関数が入る
  isActive: boolean;
  unit: string;
  unitPosition: 'left' | 'right';
};

const MainCardInput = ({
  label,
  handleChange,
  value,
  placeholder,
  handleClick,
  isActive,
  unit,
  unitPosition,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const convertedValue = e.target.value.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0));
    const result = parseInt(convertedValue, 10) || 0;
    handleChange(result);
  };
  const inputType = (handleClick: Props['handleClick']) => {
    if (isActive) {
      return (
        <div className='flex justify-end gap-2'>
          <input
            disabled={true}
            className='max-w-[70%] text-right outline-none placeholder:text-gray-700'
            onChange={onChange}
            value={convertValueToDisplayText(unit, unitPosition, value) || 0}
            placeholder={value ? String(value) : '入力値'}
            id={label}
            type='tel'
          />
          <svg
            onClick={() => handleClick(label)}
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path d='M15 0L12.5 2.5L17.5 7.5L20 5L15 0ZM10 5L0 15V20H5L15 10L10 5Z' fill='#D3D3D3' />
          </svg>
        </div>
      );
    } else {
      return (
        <input
          className='text-right outline-none'
          onChange={onChange}
          onBlur={() => handleClick('')}
          placeholder={placeholder}
          value={value || 0}
          id={label}
          type='tel'
          ref={inputRef}
        />
      );
    }
  };

  useEffect(() => {
    if (!isActive) {
      inputRef.current?.focus();
    }
  }, [isActive]);

  return (
    <div className='flex justify-between gap-x-2 border-b-2'>
      <label className='whitespace-nowrap' htmlFor={label}>
        {label}
      </label>
      {inputType(handleClick)}
    </div>
  );
};

export default MainCardInput;
