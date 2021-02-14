import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import Frase from './components/Frase'
function App() {

  return (
    <main>   
      <h2 className="title">CHUCK API</h2>
      <Frase/>  
    </main>
  );
}

export default App;
