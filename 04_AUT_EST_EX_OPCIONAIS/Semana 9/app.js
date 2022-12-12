const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'banco.db'; //use o nome que você achar melhor para o banco de dados


//* Colocar toda a parte estática no frontend */
app.use(express.static("./frontend/"));
//R do CRUD- Read
app.use(express.json());
app.get('/alunos', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM alunos ORDER BY nome DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
  });

  // Insere um registro (é o C do CRUD - Create)
  app.post('/insereAluno', urlencodedParser, (req, res) => {
      res.statusCode = 200;
      res.setHeader('Access-Control-Allow-Origin', '*');
      var db = new sqlite3.Database(DBPATH); // Abre o banco
      sql = "INSERT INTO alunos (nome, idade) VALUES ('" + req.body.nome + "', '" + req.body.idade + "')";
      console.log(sql);
      db.run(sql, [],  err => {
          if (err) {
              throw err;
          }
      });
      res.write('<p>ALUNO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
      db.close(); // Fecha o banco
      res.end();
  });

  // Monta o formulário para o update (é o U do CRUD - Update)
app.get('/atualizaAluno', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "SELECT * FROM alunos WHERE id-aluno="+ req.query.id-aluno;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizaAluno', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "UPDATE alunos SET nome='" + req.body.nome + "', idade = '" + req.body.idade + "' WHERE id-aluno='" + req.body.id-aluno + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    res.write('<p>ALUNO ATUALIZADO COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); // Fecha o banco
});
