import React, { InputHTMLAttributes } from 'react';

import styled from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value: string;
  setValue: (e: string) => void;
}

export const Input: React.FC<InputProps> = ({ value, setValue, placeholder }) => {
  return (
    <input 
      className={styled['input-create-task']} 
      type="text" 
      placeholder={placeholder}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}