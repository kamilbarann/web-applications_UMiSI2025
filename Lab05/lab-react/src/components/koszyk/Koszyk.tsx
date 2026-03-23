import Produkt from './Produkt';

const Koszyk = () => {
  return (
    <div>
      <h2>Mój Koszyk</h2>
      <Produkt nazwa="Jabłko" />
      <Produkt nazwa="Gruszka" />
      <Produkt nazwa="Śliwka" />
      <Produkt nazwa="Banan" />
      <Produkt nazwa="Czereśnia" />
    </div>
  );
};

export default Koszyk;