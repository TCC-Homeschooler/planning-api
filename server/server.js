const express = require('express');
const app = express();

app.use('/', require('./route/usuariosRoute'));
app.use('/', require('./route/autenticacaoRoute'));

app.listen(3000);