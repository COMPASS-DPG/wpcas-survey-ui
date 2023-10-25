import React from 'react';

type PropType = {
  onChange: () => void;
  checked: boolean;
  name: string;
  value: string;
};

const RadioInput = ({ onChange, checked, name, value }: PropType) => {
  return (
    <label className='text-base'>
      <input
        type='radio'
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        className='mr-2'
      />
      {value}
    </label>
  );
};

export default RadioInput;
