import React, { useState } from 'react';

const Logowanie = () => {
  const [nazwa, setNazwa] = useState('');
  const [haslo, setHaslo] = useState('');
  const [powtorzHaslo, setPowtorzHaslo] = useState('');

  const czyPuste = !nazwa || !haslo || !powtorzHaslo;

  const handleLogowanie = () => {
    if (haslo !== powtorzHaslo) {
      alert("Hasła nie są zgodne");
    } else {
      alert("Zalogowano poprawnie");
    }
  };

  return (
    <div>
      <h3>Zadanie 3.3 - Logowanie</h3>
      
      <div>
        <label>Nazwa użytkownika: </label>
        <input 
          type="text" 
          value={nazwa} 
          onChange={(e) => setNazwa(e.target.value)} 
        />
      </div>

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


      <button 
        disabled={czyPuste} 
        onClick={handleLogowanie}
        style={{ marginTop: '10px' }}
      >
        Logowanie
      </button>

    </div>
  );
};

export default Logowanie;