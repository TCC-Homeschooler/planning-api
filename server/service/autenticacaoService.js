const autenticacaoData = require('../data/autenticacaoData');
const usuariosData = require('../data/usuariosData');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.postLogin = function(nome_usuario, senha){
    try{
        const usuario = await usuariosData.getUsuarioPorNomeUsuario(nome_usuario);
        if(usuario){
            const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
            if(senhaValida){
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
            }
        }
    }
    catch{
        response.status(500).json({
            success: false,
            message: 'Falha na autenticação' ,
        })
    }
}