import React, { useState } from 'react';
import Dodawanie from './Dodawanie';

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

const StudentManager = () => {
  const [students, setStudents] = useState<Student[]>([
    { imie: "Jan", nazwisko: "Kowalski", rocznik: 2001 },
    { imie: "Anna", nazwisko: "Nowak", rocznik: 2002 },
    { imie: "Piotr", nazwisko: "Wiśniewski", rocznik: 2000 }
  ]);

  const handleAddStudent = (newStudent: Student) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div>
      <h3>Zadanie 5.2 - Student Manager</h3>
      
      {/* Tabela wyświetlająca stan */}
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dodawanie onAdd={handleAddStudent} />
    </div>
  );
};

export default StudentManager;