import React, {useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './components/Carro/Cart';
import CartProvider from './components/Context/CartProvider';
import ItemFireContainer from './components/ProductList/ItemFireContainer';
import ItemFireDetail from './components/ItemDetail/ItemFireDetail';





function App() {
  
  return (
    
    <div className='App'>
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
     </div>
  );
  
}
export default App;
