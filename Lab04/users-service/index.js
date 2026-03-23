const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3003;
const SECRET_KEY = 'bardzo_tajny_klucz_projektu';

app.use(express.json());

// Baza danych użytkowników
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './users.sqlite'
});

// Model Użytkownika
const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.sync().then(() => {
  console.log('Baza danych użytkowników gotowa.');
});


// 1. POST - Rejestracja 
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json({ id: user.id, email: user.email });
  } catch (err) {
    res.status(400).json({ error: 'Rejestracja nieudana (może email zajęty?)' });
  }
});

// 2. POST - Logowanie i wydawanie tokena 
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Błędny email lub hasło' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Błędny email lub hasło' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email }, 
      SECRET_KEY, 
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Serwis Użytkowników działa na porcie ${PORT}`);
});