const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teams = require('./utils/teams')

const app = express();

let nextId = 3;

app.use(express.json());

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    if (team) {
        res.json(team);
    } else {
        res.sendStatus(404);
    }
});

app.post('/teams', (req, res) => {
    const requiredProperties = ['nome', 'sigla'];
    if (requiredProperties.every((property) => property in req.body)) {
        const team = { id: nextId, ...req.body };
        teams.push(team);
        nextId += 1;
        res.status(201).json(team);
    } else {
        res.sendStatus(400);
    }
});

app.put('/teams/:id', (req, res) => {
    const id = Number(req.params.id);
    const requiredProperties = ['nome', 'sigla'];
    const team = teams.find(t => t.id === id);
    if (team && requiredProperties.every((property) => property in req.body)) {
        const index = teams.indexOf(team);
        const updated = { id, ...req.body };
        teams.splice(index, 1, updated);
        res.status(201).json(updated);
    } else {
        res.sendStatus(400);
    }
});

app.delete('/teams/:id', (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    if (team) {
        const index = teams.indexOf(team);
        teams.splice(index, 1);
    }
    res.sendStatus(204);
});

app.post('/teams', validateTeam, (req, res) => {
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    if (team) {
        const index = teams.indexOf(team);
        const updated = { id, ...req.body };
        team.splice(index, 1, updated);
        res.status(201).json(updated);
    } else {
        res.sendStatus(400);
    }
});

app.get('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    res.json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);

    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    const index = teams.indexOf(team);
    teams.splice(index, 1);
    res.sendStatus(204);
});

module.exports = app;
