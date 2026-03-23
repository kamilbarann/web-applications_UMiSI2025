import { useState } from 'react';
import Przycisk from './Przycisk';

const NowyLicznik = () => {
  const [licznik, setLicznik] = useState(0);

  const handleDodaj = () => {
    setLicznik(licznik + 1);
  };

  return (
    <div>
      <h2>Nowy Licznik</h2>
      <div>Stan: {licznik}</div>

      <Przycisk dodaj={handleDodaj} />
    </div>
  );
};

export default NowyLicznik;