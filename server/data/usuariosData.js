const { func } = require('../infra/database');
const database = require('../infra/database');

exports.getUsuarios = function () {
    return database.query('select * from planning.usuario');
};

exports.getUsuario = function (id) {
    return database.query('select * from planning.usuario where id = ', id);
};

exports.getUsuarioPorNomeUsuario = function (nome_usuario) {
    return database.query('select * from planning.usuario where nome_usuario = ', nome_usuario);
}