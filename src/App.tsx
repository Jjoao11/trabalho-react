import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Servicos } from './pages/Servicos';
import { Contato } from './pages/Contatos';
import { Menu } from './componentes/Menu';

function App() {
  return (
   <>
   <BrowserRouter>
   <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contatos' element={<Contato/>}></Route>
      <Route path='/servicos' element={<Servicos/>}></Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
