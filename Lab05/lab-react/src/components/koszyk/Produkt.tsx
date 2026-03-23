import React from 'react';


interface ProduktProps {
  nazwa: string;
}

const Produkt: React.FC<ProduktProps> = ({ nazwa }) => {
  return (
    <div>
      <p>Nazwa produktu: {nazwa}</p>
    </div>
  );
};

export default Produkt;