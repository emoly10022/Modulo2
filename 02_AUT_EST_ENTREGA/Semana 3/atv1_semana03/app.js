const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 8081;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'entregaS3/curriculoemelyatv1.db';

app.use(express.json());
app.get('/usuario', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); 
    var sql = 'SELECT cod_usuario, nome, idade ,telefone FROM usuario ORDER BY cod_usuario';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); 
});

app.get('/formacao', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); 
    var sql = 'SELECT cod_usuario, curso, instituicao FROM formacao ORDER BY cod_usuario';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); 
});

app.get('/habilidade', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); 
    var sql = 'SELECT cod_usuario, nome, descricao FROM habilidade ORDER BY cod_usuario';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); 
});

app.get('/experiencia', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); 
    var sql = 'SELECT curso, nome_empresa, descricao, cargo FROM experiencia ORDER BY cod_usuario';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); 
});



app.listen(port,()=> console.log("O server está rodando: "+hostname));