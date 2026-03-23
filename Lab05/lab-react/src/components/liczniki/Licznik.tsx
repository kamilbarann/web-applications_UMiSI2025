import { useState } from 'react';

const Licznik = () => {
  const [licznik, setLicznik] = useState(0);

  const dodaj = () => {
    setLicznik(licznik + 1);
  };

  return (
    <div>
      <div>Stan licznika: {licznik}</div>
      
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
};

export default Licznik;