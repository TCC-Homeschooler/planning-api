const autenticacaoData = require('../data/autenticacaoData');
const usuariosData = require('../data/usuariosData');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.postLogin = function(nome_usuario, senha, done){
    try{
        const usuario = await usuariosData.getUsuarioPorNomeUsuario(nome_usuario);
        if(!usuario){ return done(null, false)}
        
        const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
        if(!senhaValida){ return done(null, false)}
        
        const token = jwt.sign({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            usuario_tipo: usuario.usuario_tipo
        },
        "planning",
        {
            expiresIn: "1d"
        })

        return done(null, token);
    }
    catch(err){
        done(err, false)
    }
}