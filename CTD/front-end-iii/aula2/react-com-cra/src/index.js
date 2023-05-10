import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Titulo, NomeIntegranteMesa, HelloWorldDaSorte} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Titulo />
    <NomeIntegranteMesa/>
    <HelloWorldDaSorte/>
  </div>
);
