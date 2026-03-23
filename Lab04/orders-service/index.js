const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3002;

const SECRET_KEY = 'bardzo_tajny_klucz_projektu';

app.use(express.json());

// Baza danych zamówień
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './orders.sqlite'
});

// Model Zamówienia
const Order = sequelize.define('Order', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

sequelize.sync().then(() => {
  console.log('Baza danych zamówień gotowa.');
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Brak tokena' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token niepoprawny lub wygasł' });
    
    req.user = user; 
    next();
  });
};


// 1. GET - Pobiera zamówienia użytkownika
app.get('/api/orders/:userId', async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { userId: req.params.userId } });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. POST - Dodaje zamówienie
app.post('/api/orders', authenticateToken, async (req, res) => {
  try {
    const { bookId, quantity } = req.body;
    const userId = req.user.userId;

    try {
      await axios.get(`http://localhost:3001/api/books/${bookId}`);
    } catch (error) {
        return res.status(404).json({ message: 'Nie ma takiej książki w serwisie Books' });
    }

    const newOrder = await Order.create({ userId, bookId, quantity });
    res.status(201).json({ id: newOrder.id, ...newOrder.dataValues });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. DELETE - Usuń zamówienie
app.delete('/api/orders/:orderId', authenticateToken, async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.orderId);
        if (!order) return res.status(404).json({ message: 'Zamówienie nie istnieje' });

        await order.destroy();
        res.json({ message: 'Zamówienie usunięte' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. PATCH - Aktualizacja
app.patch('/api/orders/:orderId', authenticateToken, async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.orderId);
        if (!order) return res.status(404).json({ message: 'Zamówienie nie istnieje' });

        const { quantity } = req.body;
        if(quantity) order.quantity = quantity;
        
        await order.save();
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
  console.log(`Serwis Zamówień działa na porcie ${PORT}`);
});