const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const dataFile = path.join(__dirname, 'tournaments.json');

app.use(bodyParser.json());

app.get('/api/tournaments', (req, res) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer los datos del torneo');
        }
        res.send(data);
    });
});

app.post('/api/tournaments', (req, res) => {
    const newTournament = req.body;
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer los datos del torneo');
        }
        const tournaments = JSON.parse(data || '[]');
        tournaments.push(newTournament);
        fs.writeFile(dataFile, JSON.stringify(tournaments, null, 2), err => {
            if (err) {
                return res.status(500).send('Error al guardar los datos del torneo');
            }
            res.sendStatus(200);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
