const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
require('dotenv').config();

const api = require('./routes/api');

const app = express();

const corsOptions = { origin: true, credentials: true };

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use('/api/v1', api);

module.exports = app;
