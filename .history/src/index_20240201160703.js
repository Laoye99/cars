import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card'
import reportWebVitals from './reportWebVitals';
import CardList from ''
import 'tachyons';
import { cars } from './cars';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div>
  <Card id ={cars[0].id} brand={cars[0].brand} model ={cars[0].model} img ={cars[0].img}/>
  <Card id ={cars[1].id} brand={cars[1].brand} model ={cars[1].model} img ={cars[1].img}/>
  <Card id ={cars[2].id} brand={cars[2].brand} model ={cars[2].model} img ={cars[2].img}/>
  <Card id ={cars[3].id} brand={cars[3].brand} model ={cars[3].model} img ={cars[3].img}/>
  <Card id ={cars[4].id} brand={cars[4].brand} model ={cars[4].model} img ={cars[4].img}/>
  </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
