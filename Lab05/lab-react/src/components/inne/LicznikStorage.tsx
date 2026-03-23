import { useState, useEffect } from 'react';

const LicznikStorage = () => {
  const [licznik, setLicznik] = useState<number>(() => {
    const saved = localStorage.getItem('licznik');
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('licznik', licznik.toString());
  }, [licznik]);

  return (
    <div>
      <h3>Zadanie 8.1 - Licznik z pamięcią</h3>
      <p>Wartość: {licznik}</p>
      <button onClick={() => setLicznik(licznik + 1)}>Dodaj</button>
    </div>
  );
};

export default LicznikStorage;