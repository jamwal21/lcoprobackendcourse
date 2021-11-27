const express = require('express');
const format = require('date-format');

const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).send("hellloooo")
})

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: 'kuroko30',
        followers: 101,
        follows: 51,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    }
    res.status(200).json(instaSocial)
})

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username: 'kuroko30fb',
        followers: 51,
        follows: 101,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    }
    res.status(200).json(instaSocial)
})

app.get("/api/v1/linkedin", (req, res) => {
    const instaSocial = {
        username: 'kuroko30linkedin',
        followers: 510,
        follows: 10,
        date: format.asString("dd/MM - hh:mm:ss", new Date())
    }
    res.status(200).json(instaSocial)
})

app.get("/api/v1/:token", (req, res) => {
    res.status(200).json({params: req.params.token})
})

app.listen(PORT, () => {
    console.log('running', PORT)
})


