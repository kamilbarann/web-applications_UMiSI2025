import React, { useState, useEffect } from 'react';

const Tytul = () => {
  const [tytul, setTytul] = useState('');

  useEffect(() => {
    document.title = tytul;
  }, [tytul]);

  return (
    <div>
      <h3>Zadanie 6.2 - Tytuł strony</h3>
      <input 
        type="text" 
        value={tytul} 
        onChange={(e) => setTytul(e.target.value)} 
        placeholder="Wpisz tytuł strony..."
      />
    </div>
  );
};

export default Tytul;