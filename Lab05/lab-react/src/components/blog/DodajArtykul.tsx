// src/components/blog/DodajArtykul.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook do przekierowania

const DodajArtykul = () => {
  const [tytul, setTytul] = useState('');
  const [tresc, setTresc] = useState('');
  const navigate = useNavigate();

  const handleDodaj = () => {
    // 1. Pobieramy obecne artykuły z localStorage (lub pusta tablica)
    const storedArticles = localStorage.getItem('articles');
    const articles = storedArticles ? JSON.parse(storedArticles) : [];

    // 2. Tworzymy nowy obiekt artykułu
    const newArticle = {
      id: Date.now(), // Unikalne ID na podstawie czasu
      title: tytul,
      content: tresc
    };

    // 3. Dodajemy i zapisujemy
    articles.push(newArticle);
    localStorage.setItem('articles', JSON.stringify(articles));

    // 4. Przekierowanie do listy bloga
    alert("Dodano artykuł!");
    navigate('/blog');
  };

  return (
    <div>
      <h2>Dodaj nowy artykuł</h2>
      <div>
        <input 
            type="text" 
            placeholder="Tytuł" 
            value={tytul} 
            onChange={(e) => setTytul(e.target.value)} 
        />
      </div>
      <div>
        <textarea 
            placeholder="Treść artykułu" 
            value={tresc} 
            onChange={(e) => setTresc(e.target.value)} 
        />
      </div>
      <button onClick={handleDodaj}>DODAJ</button>
    </div>
  );
};

export default DodajArtykul;