type Props = {
  label: string;
  handleChange: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  handleActive: React.Dispatch<React.SetStateAction<string>> | '';
};

const Input = ({ label, handleChange, value, handleActive }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = parseInt(e.target.value, 10) || 0;
    handleChange(result);
  };
  const inputType = (handleActive: React.Dispatch<React.SetStateAction<string>> | '') => {
    if (handleActive !== '') {
      return (
        <div className='flex'>
          <input
            disabled={true}
            className='text-right outline-none placeholder:text-gray-700'
            onChange={onChange}
            value={value || 0}
            placeholder={value ? String(value) : '入力値'}
            id={label}
            type='tel'
          />
          <svg
            onClick={() => handleActive(label)}
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
          placeholder='入力してください'
          value={value || 0}
          id={label}
          type='tel'
        />
      );
    }
  };

  return (
    <div className='flex justify-between border-b-2'>
      <label htmlFor={label}>{label}</label>
      {inputType(handleActive)}
    </div>
  );
};

export default Input;
