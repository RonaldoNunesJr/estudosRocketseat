const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hellow Wolrd 1</h1>')
})

app.listen(3001, (req, res) => {
    console.log("Server rodando, e disponivel na porta 3001 | localhost:3001");
});