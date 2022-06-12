import { createContext, ReactNode, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { Data } from '../utils/Props'

interface TaskProviderProps {
  children: ReactNode;
}

interface TaskContextData {
  task: string;
  tasks: Data[];

  setTask: (task: string) => void;
  handleAddTask: () => void;
  handleCheckedTask: (id: string) => void;
  handleRemoveTask: (id: string) => void;
}

export const TaskContext = createContext({} as TaskContextData)

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<Data[]>([])

  const handleAddTask = () => {
    if (task) {
      const data: Data = {
        id: uuidv4(),
        description: task,
        isComplete: false
      }
  
      const newTasks = [...tasks, data]
  
      setTasks(newTasks)
      setTask('')
    }
  }

  const handleCheckedTask = (id?: string) => {
    const currentTasks = [...tasks]
    const selectTaskIndex = currentTasks.findIndex(item => item.id === id)
    const selectTask = currentTasks.find(item => item.id === id)

    const newTask: Data = {
      id: selectTask?.id,
      description: selectTask?.description,
      isComplete: !selectTask?.isComplete,
    }

    currentTasks[selectTaskIndex] = newTask

    setTasks(currentTasks)
  }

  const handleRemoveTask = (id: string) => {
    const newTasks = tasks.filter(item => item.id !== id)

    setTasks(newTasks)
  }

  return (
    <TaskContext.Provider 
      value={{ 
        task, 
        setTask, 
        handleAddTask, 
        tasks, 
        handleCheckedTask, 
        handleRemoveTask
      }}
    >
      { children }
    </TaskContext.Provider>
  )
}