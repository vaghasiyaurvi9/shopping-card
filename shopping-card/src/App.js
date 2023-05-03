import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Items from './components/Items';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contexapi from './components/Contexapi';

function App() {
  return (
    <Routes>
    <Route path="/item" element={ <Items/> } />
    <Route path="/cart" element={ <Cart/> } />
    <Route path="/" element={ <Contexapi/> } />
  
  </Routes>
  );
}

export default App;
