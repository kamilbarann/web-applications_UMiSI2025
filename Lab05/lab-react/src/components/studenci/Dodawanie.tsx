import React, { useState } from 'react';

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

interface DodawanieProps {
  onAdd: (student: Student) => void;
}

const Dodawanie: React.FC<DodawanieProps> = ({ onAdd }) => {
  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [rocznik, setRocznik] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!imie || !nazwisko || !rocznik) {
        alert("Wypełnij wszystkie pola!");
        return;
    }

    if (isNaN(Number(rocznik))) {
        alert("Rocznik musi być liczbą!");
        return;
    }

    onAdd({
        imie, 
        nazwisko, 
        rocznik: Number(rocznik)
    });

    setImie('');
    setNazwisko('');
    setRocznik('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input 
        type="text" 
        placeholder="Imię" 
        value={imie} 
        onChange={(e) => setImie(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Nazwisko" 
        value={nazwisko} 
        onChange={(e) => setNazwisko(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Rocznik" 
        value={rocznik} 
        onChange={(e) => setRocznik(e.target.value)} 
      />
      <button type="submit">Dodaj</button>
    </form>
  );
};

export default Dodawanie;