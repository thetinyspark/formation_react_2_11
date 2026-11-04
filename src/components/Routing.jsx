import { Route, Routes } from 'react-router-dom';
import Catalog from './screens/Catalog';
import Home from './screens/Home';
import Cart from './screens/Cart';
import ProductDetailedPage from './screens/ProductDetailedPage';
export default function Routing(){
    return ( 
         <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/catalog' element={<Catalog />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/product/:id' element={<ProductDetailedPage />}/>
        </Routes>
    )
}