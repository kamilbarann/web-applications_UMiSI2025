import React from 'react';

interface PrzyciskProps {
  dodaj: () => void;
}

const Przycisk: React.FC<PrzyciskProps> = ({ dodaj }) => {
  return (
    <button onClick={dodaj}>
      Dodaj
    </button>
  );
};

export default Przycisk;