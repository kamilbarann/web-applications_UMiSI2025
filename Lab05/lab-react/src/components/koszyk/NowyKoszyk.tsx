import Produkt from './Produkt';

const NowyKoszyk = () => {
  const nazwyProduktow = ["Jabłko", "Gruszka", "Śliwka", "Banan", "Czereśnia"];

  return (
    <div>
      <h2>Nowy Koszyk </h2>
      {nazwyProduktow.map((nazwa, index) => (
        <Produkt key={index} nazwa={nazwa} />
      ))}
    </div>
  );
};

export default NowyKoszyk;