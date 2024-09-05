const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let temperatura = req.query.temperatura
    res.json ({mensagem: '',});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
})