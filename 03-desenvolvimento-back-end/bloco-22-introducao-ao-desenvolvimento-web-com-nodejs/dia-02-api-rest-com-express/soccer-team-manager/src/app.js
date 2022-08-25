const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const apiCredentials = require('./middlewares/apiCredentials');

const app = express();
app.use(apiCredentials); 
app.use(express.static('./images'));

let nextId = 3;

const teams = [
    { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
    { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
  ];

app.use(express.json());

app.get('/teams', (req, res) => res.status(200).json({ teams }));

const existingId = (req, res, next) => {
    const id = Number(req.params.id);

    if (teams.some((t) => t.id === id)) {
        next();
    }
    res.sendStatus(404);
};

app.get('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
    res.json(team);
});

app.post('/teams', validateTeam, (req, res) => {
    if (!req.teams.includes(req.body.sigla) && teams.every((t) => t.sigla !== req.body.sigla)) {
        return res.sendStatus(401);
    }
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);    
});

app.delete('/teams/:id', (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
    const index = teams.indexOf(team);
    teams.splice(index, 1);  
    res.sendStatus(200);
  });

  app.use((req, res) => res.sendStatus(404));

module.exports = app;
