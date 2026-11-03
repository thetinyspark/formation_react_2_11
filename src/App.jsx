import { useEffect, useState } from 'react';
import PageHeader from './components/comp/PageHeader';
import Catalog from './components/screens/Catalog';
import Home from './components/screens/Home';
import { Link, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <>
      <main className="app-shell">
        <PageHeader/>
        
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/catalog">Boutique</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/catalog' element={<Catalog />}/>
        </Routes>
      </main>
      <footer className="course-note">Footer</footer>
    </>
  );
}
