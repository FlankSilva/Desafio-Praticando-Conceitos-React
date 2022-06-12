import React, { useContext } from 'react';
import { TaskContext } from '../../../../../hooks/TaskContext'


import check from '../../../../../assets/check.svg'
import checked from '../../../../../assets/checked.svg'
import trash from '../../../../../assets/trash.svg'

import styled from './styles.module.css'

import { Data } from '../../../../../utils/Props'

export const Item: React.FC<Data> = ({ id = '', description = '', isComplete = false }) => {
  const { handleCheckedTask, handleRemoveTask } = useContext(TaskContext)

  return (
    <li>
      <div className={styled['container-checked-text']}>
        <button onClick={() => handleCheckedTask(id)} type='button'>
          <img src={isComplete ? checked : check} alt="ckeck" />
        </button>
        <p className={isComplete ? styled['cheked-text'] : ''}>{ description }</p>
      </div>
      <button onClick={() => handleRemoveTask(id)} type='button'>
        <img src={trash} alt="" />
      </button>
    </li>
  )
}
