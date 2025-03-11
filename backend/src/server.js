require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
