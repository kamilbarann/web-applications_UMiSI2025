// src/components/blog/ListaArtykulow.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  content: string;
}

const ListaArtykulow = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Pobieramy listę przy załadowaniu
    const stored = localStorage.getItem('articles');
    if (stored) {
      setArticles(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      <h2>Lista Artykułów</h2>
      <Link to="/dodaj" style={{ display: 'block', marginBottom: '20px' }}>+ Dodaj nowy artykuł</Link>
      
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            {/* Link dynamiczny do konkretnego ID */}
            <Link to={`/article/${article.id}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
      {articles.length === 0 && <p>Brak artykułów. Dodaj coś!</p>}
    </div>
  );
};

export default ListaArtykulow;