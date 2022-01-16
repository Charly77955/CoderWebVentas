import react from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrito from './components/ShoppingCart';

function App() {
  return (
    <Router>
     
     <NavBar/>
     <Routes>

     <Route path="Carrito" element={<Carrito/>}/>
     
     
     </Routes>
     </Router>
       
  );
}

export default App;
