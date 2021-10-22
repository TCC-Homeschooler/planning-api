const express = require('express');
const router = express.Router();
const usuariosService = require('../service/usuariosService');

router.get('/usuarios'      , async function (req, res) {
    const usuarios = await usuariosService.getUsuarios();
    res.json(usuarios);
});
router.get('/usuario/:id'   , async function (req, res) {
    const usuario = await usuariosService.getUsuario(req.params.id);
    res.json(usuario);
});
router.post('/usuario'      , async function (req, res) {

});
router.put('/usuario/:id'   , async function (req, res) {

});
router.delete('/usuario/:id', async function (req, res) {

});

module.exports = router;