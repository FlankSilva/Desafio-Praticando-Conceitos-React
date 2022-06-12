import React from 'react';

import todoLogo from '../../assets/todo-logo.svg';
import { Form } from '../Form'

import styled from './styles.module.css'

export const Header: React.FC = () => {

  return (
    <header className={styled['container-header']}>
      <a href="/">
        <img src={todoLogo} alt="logotipo todo" width="126" height="48" />
      </a>
      <div className={styled['container-form']}>
        <Form />
      </div>
    </header>
  )
}
