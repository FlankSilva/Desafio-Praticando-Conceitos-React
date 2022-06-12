import React, { useContext } from 'react';
import { TaskContext } from '../../../hooks/TaskContext'

import { EmptyData } from './EmptyData'
import { ListTask } from './ListTask'

import styled from './styles.module.css'

export const TaskBody: React.FC = () => {
  const { tasks } = useContext(TaskContext)

  return (
    <div className={styled.container}>
      {!!tasks.length ? (
        <ListTask />
      ) : (
        <EmptyData />
      )}
    </div>
  )
}
