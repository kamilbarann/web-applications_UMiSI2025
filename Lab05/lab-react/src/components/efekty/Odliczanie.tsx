import { useState, useEffect } from 'react';

const Odliczanie = () => {
  const [licznik, setLicznik] = useState(150);
  const [odliczanieWlaczone, setOdliczanieWlaczone] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;

    if (odliczanieWlaczone && licznik > 0) {
      intervalId = setInterval(() => {
        setLicznik((prevLicznik) => prevLicznik - 1);
      }, 100);
    } else if (licznik === 0) {
      setOdliczanieWlaczone(false);
    }

    return () => clearInterval(intervalId);
  }, [odliczanieWlaczone, licznik]);

  const toggleOdliczanie = () => {
    setOdliczanieWlaczone(!odliczanieWlaczone);
  };

  let przyciskTekst = "START";
  if (licznik === 0) {
    przyciskTekst = "Odliczanie zakończone";
  } else if (odliczanieWlaczone) {
    przyciskTekst = "STOP";
  }

  return (
    <div>
      <h3>Zadanie 6.3 - Odliczanie</h3>
      
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        {(licznik / 10).toFixed(1)} sek
      </div>

      <button 
        onClick={toggleOdliczanie} 
        disabled={licznik === 0}
        style={{ marginTop: '10px' }}
      >
        {przyciskTekst}
      </button>
    </div>
  );
};

export default Odliczanie;