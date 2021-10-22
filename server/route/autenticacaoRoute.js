const express = require('express');
const router = express.Router();
const authService = require('../service/authService');

router.post('/login', async function(req, res) {
    const login = await authService.postLogin(req.body.nome_usuario, req.body.senha_hash)
    res.json(login);
});

module.exports = router;