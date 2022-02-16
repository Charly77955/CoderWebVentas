import React, {useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import Productos from './components/ProductList/ItemListContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './components/Carro/Cart';
// import ItemDetail from './components/ItemDetail/ItemDetail';
import CartProvider from './components/Context/CartProvider';
import ItemFireContainer from './components/ProductList/ItemFireContainer';
import ItemFireDetail from './components/ItemDetail/ItemFireDetail';
import TestForm from './components/Tests/TestForm';




function App() {
  
  return (
    
    
    <CartProvider>
    <Router>
     <NavBar/>  
     <Routes>
      
     <Route path="Cart" element={<Cart/>}/>
      <Route path="Detallebtn" element={<ItemFireDetail/>}/>
    
     <Route/>
     <Route path="ItemDetail/:id" element={<ItemFireDetail />}/>
     
     <Route path="productos" element={<ItemFireContainer/>}/>
     <Route/>
     </Routes>
     </Router>
     </CartProvider>
     
  );
  
}
export default App;
