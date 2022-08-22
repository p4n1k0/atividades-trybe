const express = require('express');

const app = express();

app.get('/myActivities/:id', (req, res) => {
    const activity = activities.find(({ id }) => id === Number(req.params.id));   
    res.status(200).json(activity); 
});

module.exports = app;