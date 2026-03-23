import React from 'react';

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

const Studenci = () => {
  const Students: Student[] = [
    { imie: "Jan", nazwisko: "Kowalski", rocznik: 2001 },
    { imie: "Anna", nazwisko: "Nowak", rocznik: 2002 },
    { imie: "Piotr", nazwisko: "Wiśniewski", rocznik: 2000 }
  ];

  return (
    <div>
      <h3>Zadanie 5.1 - Lista Studentów</h3>
      
      {/* Tabela */}
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapowanie tablicy na wiersze tabeli */}
          {Students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Studenci;