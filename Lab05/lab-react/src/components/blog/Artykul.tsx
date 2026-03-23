// src/components/blog/Artykul.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Hook do pobierania parametrów z URL

interface Article {
  id: number;
  title: string;
  content: string;
}

const Artykul = () => {
  const { id } = useParams(); // Pobieramy "id" z adresu np. /article/12345
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('articles');
    if (stored) {
      const articles: Article[] = JSON.parse(stored);
      // Szukamy artykułu o tym ID (uwaga: id z URL to string, id w obiekcie to number)
      const found = articles.find(a => a.id.toString() === id);
      if (found) setArticle(found);
    }
  }, [id]);

  if (!article) return <div>Nie znaleziono artykułu o takim ID.</div>;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <div style={{ marginTop: '20px', fontSize: '0.8em', color: 'gray' }}>
        ID: {article.id}
      </div>
    </div>
  );
};

export default Artykul;