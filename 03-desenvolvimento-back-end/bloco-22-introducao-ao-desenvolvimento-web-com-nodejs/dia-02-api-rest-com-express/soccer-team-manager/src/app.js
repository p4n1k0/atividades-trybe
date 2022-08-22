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

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

module.exports = app;