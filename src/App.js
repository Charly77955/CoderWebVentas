import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrito from './components/ShoppingCart';

function App() {
  return (
    <Router>
     
     <Route/>
     
     <NavBar/>
     <Routes>
     <ItemListContainer />
     
     <Route path="Carrito" element={<Carrito/>}/>
     
     
     
     </Routes>
     </Router>
       
  );
}

export default App;
