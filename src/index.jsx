import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './componenty/header';
import smartHomeData from './smartHomeData';
import Dashboard from './componenty/dashboard';


const App = () => {
  return(
  <div className="container">
    <Header title="Chytrý dům"/>
    <Dashboard data={smartHomeData}/>
  </div>
)};

createRoot(
  document.querySelector('#app'),
).render(<App />);