import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Productos from './components/ProductList/ItemListContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrito from './components/ShoppingCart';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <Router>
     
     
     
     <NavBar/>
     <Routes>
     
     
     <Route path="Carrito" element={<Carrito/>}/>
      
     <Route/>
     
     </Routes>
     <Productos/>
     </Router>
       
  );
}

export default App;
