// Express.js Intro - write your server here.
// Run it with: node index.js   (stop it with Ctrl + C)

// Part 1: create an express app, a GET /greet endpoint and app.listen(3000)

const express = require('express');
const app = express();
const PORT = 3000;

// Part 2: GET /greet/:name  and  GET /test (calls /greet/:name with fetch)
// GET /greet
app.get('/greet', (req, res) => {
    res.json({
        msg: `hi from get endpoint ${new Date().toISOString()}`
    });
});

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;

    console.log(`i got name: ${name}`);

    res.json({
        msg: `got name: ${name}`
    });
});


app.get('/test', async (req, res) => {
    try {
        const response = await fetch(`http://localhost:${PORT}/greet/Bob`);

        const data = await response.json();

        if (data.msg === 'got name: Bob') {
            res.json({ result: 'ok' });
        } else {
            res.json({ result: 'fail' });
        }

    } catch (error) {
        res.status(500).json({ result: 'fail' });
    }
});

app.listen(PORT);

// Part 3: POST /action  ("joke" / "cat fact", otherwise 400 "body is malformed")
app.use(express.json());
app.post('/action', (req, res) => {

    if (!req.body || !req.body.action ||
        !['joke', 'cat fact'].includes(req.body.action)) {

        return res.status(400).json({
            msg: 'body is malformed'
        });
    }

});