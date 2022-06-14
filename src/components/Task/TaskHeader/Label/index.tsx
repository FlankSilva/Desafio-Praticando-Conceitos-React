import React, { useContext } from 'react';
import { TaskContext } from '../../../../hooks/TaskContext'

import styled from './styles.module.css'

interface PropsLabel {
  title: string;
  done?: boolean;
}

export const Label: React.FC<PropsLabel> = ({ title = '', done }) => {
  const { tasks } = useContext(TaskContext)

  const countIsCompleteInTasks = () => {
    const total = tasks.filter(item => item.isComplete === true)

    return total.length
  }

  return (
    <div className={styled['container']}>
      <p>{title}</p>
      <div>
        {`${countIsCompleteInTasks()}`}
        {done && ` de ${tasks.length}`}
      </div>
    </div>
  )
}
