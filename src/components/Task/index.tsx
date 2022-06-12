import React from 'react';

import { TaskHeader } from './TaskHeader';
import { TaskBody } from './TaskBody';

export const Task: React.FC = () => {
  return (
    <>
      <TaskHeader />
      <TaskBody />
    </>
  )
}
