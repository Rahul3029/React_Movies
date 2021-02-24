import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import Header from './components/Header'
import Movies from './components/Movies'

const App: React.FC = () => {
  return(
    <>
    <Header />
    <Movies />
    </>
  )
} 

export default App;
