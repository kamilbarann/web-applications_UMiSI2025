const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3001;
const SECRET_KEY = 'bardzo_tajny_klucz_projektu';

app.use(express.json());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './books.sqlite'
});

const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER }
});

sequelize.sync().then(() => console.log('Baza książek gotowa.'));

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Brak tokena' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token niepoprawny' });
    req.user = user;
    next();
  });
};


app.get('/api/books', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

app.get('/api/books/:bookId', async (req, res) => {
  const book = await Book.findByPk(req.params.bookId);
  if (!book) return res.status(404).json({ message: 'Nie znaleziono' });
  res.json(book);
});

app.post('/api/books', authenticateToken, async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const newBook = await Book.create({ title, author, year });
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/books/:bookId', authenticateToken, async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.bookId);
        if (!book) return res.status(404).json({ message: 'Nie znaleziono' });
        await book.destroy();
        res.json({ message: 'Usunięto' });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.listen(PORT, () => console.log(`Serwis Książek działa na porcie ${PORT}`));