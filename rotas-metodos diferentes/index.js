const express = require('express');
const app = express();

app.get('/usuarios/:nome', (req, res) => {
 const nome = req.params.nome;
 res.send(`Este é o perfil do usuário ${nome}`);
});

app.put('/usuarios/:nome', (req, res) => {
 const nome = req.params.nome;
 res.send(`Este é o perfil do usuário ${nome} com PUT`);
});

app.listen(3000, () => {
console.log('Servidor em execução em http://localhost:3000');
});