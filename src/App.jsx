import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Filter from './pages/filter/Filter'
import ProductDetails from './pages/productDetails/ProductDetails'
import Onboarding from './pages/onboarding/Onboarding';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/filter" element={<Filter/>} />
          <Route path="/productDetails/:productId" element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
