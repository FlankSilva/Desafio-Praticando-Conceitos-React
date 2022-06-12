import React from 'react';

import { Header } from '../../components/Header';
import { Task } from '../../components/Task';

import styled from './styles.module.css'

export const Home: React.FC = () => {
  return (
    <div className={styled.main}>
      <Header />
      <div className={styled.content}>
        <Task />
      </div>
    </div>
  )
}
