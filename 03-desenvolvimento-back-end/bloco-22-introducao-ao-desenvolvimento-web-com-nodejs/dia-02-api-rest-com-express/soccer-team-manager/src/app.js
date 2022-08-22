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

app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
    let updatedTeam;
    for (let i = 0; i < teams.length; i += 1) {
        const team = teams[i];
        if (team.id === Number(id)) {
            team.name = name;
            team.initials = initials;
            updatedTeam = team;
        }
    }
    res.status(200).json({ updatedTeam });
});

module.exports = app;