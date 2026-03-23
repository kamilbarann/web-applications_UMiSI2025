import React, { useState } from 'react';

const Aktualizacja = () => {
  const [produkt, setProdukt] = useState({ nazwa: "Pomidor", cena: 50 });

  const zmienCene = () => {
    setProdukt((prev) => ({
      ...prev,
      cena: 100  // Nadpisanie ceny nową wartością
    }));
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
      <h3>Zadanie 4.2 - Spread Operator</h3>
      
      <div>
        Aktualnie {produkt.nazwa} kosztuje {produkt.cena} zł.
      </div>

      <button onClick={zmienCene}>
        Zmień cenę na 100
      </button>
    </div>
  );
};

export default Aktualizacja;