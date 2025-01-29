const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send('Olá, mundo!');
});

app.get('/about', (req, res) => {
 res.send('Esta é a página Sobre nós!');
});

app.get('/usuarios/:nome', (req, res) => {
 const nome = req.params.id;
 res.send(`Este é o perfil do usuário ${nome}`);
});

app.listen(3000, () => {
 console.log('Servidor iniciado na porta 3000.');
});