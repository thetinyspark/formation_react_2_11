import PageHeader from './components/comp/PageHeader';
import Catalog from './components/screens/Catalog';
import Cart from './components/screens/Cart';
import Home from './components/screens/Home';
import { Route, Routes } from 'react-router-dom';
import AppNav from './components/comp/AppNav';
import ProductDetailedPage from './components/screens/ProductDetailedPage';


export default function App() {
  return (
    <>
      <main className="app-shell">
        <PageHeader/>
        <AppNav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/catalog' element={<Catalog />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/product/:id' element={<ProductDetailedPage />}/>
        </Routes>
      </main>
      <footer className="course-note">Footer</footer>
    </>
  );
}
