import React from 'react';

type PropType = {
  onChange: () => void;
  checked: boolean;
  name: string;
  value: string;
  label: string;
};

const RadioInput = ({ onChange, checked, name, value, label }: PropType) => {
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
      {label}
    </label>
  );
};

export default RadioInput;
