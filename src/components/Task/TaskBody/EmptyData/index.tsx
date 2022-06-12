import React from 'react';

import clipboard from '../../../../assets/clipboard.svg';

import styled from './styles.module.css'



export const EmptyData: React.FC = () => {
  return (
    <div className={styled.container}>
      <img src={clipboard} alt="" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong><br />
        Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}

