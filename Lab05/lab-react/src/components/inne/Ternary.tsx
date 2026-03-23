import React from 'react';

const Ternary = () => {
  const a = true;
  const b = false;

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
      <h3>Zadanie 4.1 - Ternary Operator</h3>
      
      <div style={{ color: a ? 'green' : 'red' }}>
        {a ? "Stwierdzenie a jest prawdziwe" : "Stwierdzenie a jest fałszywe"}
      </div>

      <div style={{ color: b ? 'green' : 'red' }}>
        {b ? "Stwierdzenie b jest prawdziwe" : "Stwierdzenie b jest fałszywe"}
      </div>
    </div>
  );
};

export default Ternary;