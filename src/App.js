import logo from './logo.svg';
import './App.css';
import Products from './Components/Products/Products';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Products/>} />
        <Route exact path="/ProductDetails/:id" element={<ProductDetails/>} />
      </Routes>
    
      
    </div>
  );
}

export default App;
