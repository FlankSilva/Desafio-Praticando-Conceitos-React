import React, { useContext } from 'react';
import { TaskContext } from '../../hooks/TaskContext'

import { Input } from './Input';
import { Button } from './Button';

import styled from './styles.module.css'

import { FormProps } from '../../utils/Props'

interface Props extends FormProps {
  handleAddTask: () => void;
}

export const Form: React.FC = () => {
  const { task, setTask, handleAddTask } = useContext(TaskContext)

  return (
    <div className={styled['container-form']}>
        <Input placeholder='Adicione uma nova tarefa' value={task} setValue={setTask} />
        <Button onClick={handleAddTask}  />
    </div>
  )
}
