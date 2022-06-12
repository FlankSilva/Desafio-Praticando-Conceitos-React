import React from 'react';

import { Label } from './Label';

import styled from './styles.module.css'

export const TaskHeader: React.FC = () => {
  return (
    <div className={styled['container']}>
      <Label title='Tarefas criadas' />
      <Label title='Concluídas' done />
    </div>
  )
}
