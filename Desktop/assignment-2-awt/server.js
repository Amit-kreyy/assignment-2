// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PrismaClient } = require('./generated/prisma'); 
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // serve HTML from public/




// GET /api/quotes
app.get('/api/quotes', async (req, res) => {
  const quotes = await prisma.quote.findMany();
  res.json(quotes);
});

// POST /api/quotes
app.post('/api/quotes', async (req, res) => {
  const { text, author } = req.body;
  const newQuote = await prisma.quote.create({ data: { text, author } });
  res.json(newQuote);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));