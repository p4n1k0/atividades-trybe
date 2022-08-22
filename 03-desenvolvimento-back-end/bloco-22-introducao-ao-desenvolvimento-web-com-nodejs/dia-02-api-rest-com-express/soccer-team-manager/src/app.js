const express = require('express');

const teams = [
    {
        id: 1,
        name: 'Sport Club Corinthians Paulista',
        initials: 'COR',
    },
    {
        id: 2,
        name: 'São Paulo Futebol Clube',
        initials: 'SPF',
    },
];

const app = express();

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

module.exports = app;