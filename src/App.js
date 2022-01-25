import React from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import Productos from './components/ProductList/ItemListContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrito from './components/ShoppingCart';
<<<<<<< HEAD
=======
import ItemDetail from './components/ItemDetail/ItemDetail';
>>>>>>> 0218a63 (Para chequear-CarlosDeSantis)

function App() {
  return (
    <Router>
     
     
     
     <NavBar/>
     <Routes>
     
     
     <Route path="Carrito" element={<Carrito/>}/>
<<<<<<< HEAD
      
     <Route/>
     <Route path="productos" element={<Productos/>}/>
=======
     <Route path="Detallesbtn" element={<ItemDetail/>}/>
      
     <Route/>
     <Route path="productos" element={<Productos/>}/>
     <Route path="ItemDetail" element={<ItemDetail/>}/>
>>>>>>> 0218a63 (Para chequear-CarlosDeSantis)
      
     <Route/>
     </Routes>
     
     </Router>
       
  );
}

export default App;
