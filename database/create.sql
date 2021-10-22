create schema planning;

create table planning.usuario (
    id serial primary key,
    nome character(60) not null,
    nome_usuario character(30) not null,
    email character(50) not null,
    senha_hash character(60) not null,
    usuario_tipo int not null
);