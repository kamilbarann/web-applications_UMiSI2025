import { useState, useEffect } from 'react'; // Importujemy useEffect

const Licznik = () => {
  const [licznik, setLicznik] = useState(0);

  const dodaj = () => {
    setLicznik(licznik + 1);
  };

  // Efekt 1: Wywołuje się TYLKO RAZ po załadowaniu komponentu
  // Dzieje się tak, ponieważ przekazujemy pustą tablicę dependencji []
  useEffect(() => {
    console.log("Hello world");
  }, []);

  // Efekt 2: Wywołuje się ZA KAŻDYM RAZEM, gdy zmieni się zmienna 'licznik'
  // Dzieje się tak, ponieważ przekazujemy [licznik] w tablicy dependencji
  useEffect(() => {
    console.log(`Licznik zwiększył się do ${licznik}`);
  }, [licznik]);

  return (
    <div>
      <h3>Zadanie 6.1 - Efekty</h3>
      <div>Stan licznika: {licznik}</div>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
};

export default Licznik;