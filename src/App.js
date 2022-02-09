import React from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import Productos from './components/ProductList/ItemListContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './components/Carro/Cart';
import ItemDetail from './components/ItemDetail/ItemDetail';
import CartProvider from './components/Context/CartProvider';

function App() {
  return (
    
    <CartProvider>
    <Router>
     <NavBar/>
     <Routes>
     
     
     <Route path="Cart" element={<Cart/>}/>
      <Route path="Detallebtn" element={<ItemDetail/>}/>

     <Route/>
     <Route path="ItemDetail/:id" element={<ItemDetail />}/>

     <Route path="productos" element={<Productos/>}/>
     <Route/>
     </Routes>
     </Router>
     </CartProvider>
  );
}

export default App;
