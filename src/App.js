import React from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import Productos from './components/ProductList/ItemListContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrito from './components/Carrito';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <Router>
     
     
     
     <NavBar/>
     <Routes>
     
     
     <Route path="Carrito" element={<Carrito/>}/>
      <Route path="Detallebtn" element={<ItemDetail/>}/>

     <Route/>
     <Route path="ItemDetail" element={<ItemDetail/>}/>

     <Route path="productos" element={<Productos/>}/>
     


     
     <Route/>
     </Routes>
     
     </Router>
       
  );
}

export default App;
