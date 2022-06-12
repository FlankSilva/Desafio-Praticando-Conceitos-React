import React from 'react';

import plusIcon from '../../../assets/plus.svg'

import styled from './styles.module.css'

interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button 
      type='button' 
      className={styled['button-create-task']}
      onClick={() => {onClick()}}
    >
      Criar
      <img src={plusIcon} alt="" width="16" height="16" />
    </button>
  )
}
