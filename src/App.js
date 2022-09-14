import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import ProductShow from './components/ProductShow';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/products/" /> 
        <Route element={<ProductShow/>} path="/products/:id" /> 
      </Routes>
    </div>
  );
}

export default App;
