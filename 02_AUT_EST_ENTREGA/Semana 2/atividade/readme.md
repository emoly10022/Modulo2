#Atividade Semana 2

###<a href="">Modelo lógico</a>

###<a href="">Modelo Físico



BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS "usuario" (
    "cod_usuario"	integer NOT NULL,<br />
    "nome"	varchar(11) NOT NULL UNIQUE,<br />
    "idade"	int(3) NOT NULL,<br />
    "e-mail"	varchar(128) NOT NULL,<br />
    "endereço"	char(255) NOT NULL,<br />
    "telefone"	char(14) NOT NULL,<br />
    PRIMARY KEY("cod_usuario" AUTOINCREMENT)<br />
);<br />

CREATE TABLE IF NOT EXISTS "formacao" (
    "curso"	varchar(50),<br />
    "data_de_ inicio" date,<br />
    "data_de_formacao" date,<br />
    "instituicao" varchar(50),<br />
    "cod_usuario" integer NOT NULL,<br />
    "id" integer NOT NULL unique,<br />
    PRIMARY KEY("id" AUTOINCREMENT),<br />
    FOREIGN KEY("cod_usuario") REFERENCES "usuario"("cod_usuario")<br />
);<br />

CREATE TABLE IF NOT EXISTS "habilidade" (
    "nome"	varchar(100),<br />
    "descricao" varchar(50),<br />
    "cod_usuario" integer NOT NULL,<br />
    "id" integer NOT NULL unique,<br />
    PRIMARY KEY("id" AUTOINCREMENT),<br />
    FOREIGN KEY("cod_usuario") REFERENCES "usuario"("cod_usuario")<br />
);

CREATE TABLE IF NOT EXISTS "experiencia" (
    "curso"	varchar(50),<br />
    "nome_empresa" varchar(100),<br />
    "descricao" varchar(255),<br />
    "cargo" varchar(40),<br />
    "cod_usuario" integer NOT NULL,<br />
    "id" integer NOT NULL unique,<br />
    PRIMARY KEY("id" AUTOINCREMENT),<br />
    FOREIGN KEY("cod_usuario") REFERENCES "usuario"("cod_usuario")<br />
);<br />




INSERT INTO "usuario" VALUES (504043,"Emely Tavares", 19, "emelytavares@gmail.com", "Rua m.m.d.c, butãnta, 80", "88996100094")

