import React, { useState } from 'react';

const Haslo = () => {
  const [haslo, setHaslo] = useState('');
  const [powtorzHaslo, setPowtorzHaslo] = useState('');

  const getKomunikat = () => {
    if (!haslo && !powtorzHaslo) {
      return "Proszę wprowadzić hasło";
    }
    if (haslo !== powtorzHaslo) {
      return "Hasła nie są zgodne";
    }
    return "";
  };

  return (
    <div>
      <h3>Zadanie 3.2 - Walidacja Hasła</h3>
      <div>
        <label>Hasło: </label>
        <input 
          type="text" 
          value={haslo} 
          onChange={(e) => setHaslo(e.target.value)} 
        />
      </div>
      <div>
        <label>Powtórz Hasło: </label>
        <input 
          type="text" 
          value={powtorzHaslo} 
          onChange={(e) => setPowtorzHaslo(e.target.value)} 
        />
      </div>
      <div style={{ color: 'red', marginTop: '10px' }}>
        {getKomunikat()}
      </div>
    </div>
  );
};

export default Haslo;