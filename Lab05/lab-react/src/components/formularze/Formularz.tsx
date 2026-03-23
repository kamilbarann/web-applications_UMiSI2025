import React, { useState } from 'react';

const Formularz = () => {
  const [tekst, setTekst] = useState('');

  const handleZmiana = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTekst(event.target.value);
  };

  return (
    <div>
      <h3>Zadanie 3.1 - Input</h3>
      <input 
        type="text" 
        value={tekst} 
        onChange={handleZmiana} 
        placeholder="Wpisz coś..."
      />
      <div style={{ marginTop: '10px' }}>{tekst}</div>
    </div>
  );
};

export default Formularz;