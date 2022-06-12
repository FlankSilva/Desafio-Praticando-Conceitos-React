import React, { useContext } from 'react';
import { TaskContext } from '../../../../hooks/TaskContext'

import { Item } from './Item'

import styled from './styles.module.css'

export const ListTask: React.FC = () => {
  const { tasks } = useContext(TaskContext)

  return (
    <ul className={styled.container}>
      { tasks.map(item => {
        return (
          <Item
            key={item.id}
            description={item.description}
            isComplete={item.isComplete}
            id={item.id}
          />
        )
      }) }
    </ul>
  )
}
