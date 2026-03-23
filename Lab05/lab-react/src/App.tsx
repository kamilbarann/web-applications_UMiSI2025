import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/blog/Home';
import ListaArtykulow from './components/blog/ListaArtykulow';
import DodajArtykul from './components/blog/DodajArtykul';
import Artykul from './components/blog/Artykul';
import LicznikStorage from './components/inne/LicznikStorage'; // Zadanie 8.1
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/blog" style={{ marginRight: '10px' }}>Blog</Link>
          <Link to="/dodaj">Dodaj Artykuł</Link>
        </nav>

        <div style={{ marginBottom: '20px', border: '1px dashed grey', padding: '5px' }}>
            <LicznikStorage />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<ListaArtykulow />} />
          <Route path="/dodaj" element={<DodajArtykul />} />
          <Route path="/article/:id" element={<Artykul />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;