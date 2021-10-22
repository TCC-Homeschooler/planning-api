const usuariosData = require('../data/usuariosData');

exports.getUsuarios = function(){
    return usuariosData.getUsuarios();
};

exports.getUsuario = function(id){
    return usuariosData.getUsuario(id);
}