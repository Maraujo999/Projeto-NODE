var express= require("express");
var bodyParser = require("body-parser");
const mysql = require('mysql');
//rotas ...
var app = express();

app.use(bodyParser.json());

//Dao
function execSQl(sqlQry){
  return new Promise((resolve, reject)=>{
   const connection=mysql.createConnection({
     host : "localhost",
     user :"root",
     port : "3306",
     password:"coti",
     database:"DBdaviVSGolias"
      });

      
    connection.query(sqlQry, function(error, results, fields){
      if (error){
          reject(error);
          console.log(error);
      }else{
          resolve(results);
      }
       connection.end();
     console.log('Abriu Banco de Dados');
    })
    
  })
}



app.get("/", (req,res)=>{
res.json("Bem Vindo Node Server, Me busque Java !!!!!!!!");
});



app.get("/cliente", (req,res)=>{
    execSQl('select * from cliente').
          then((dados)=> {
              res.json(dados);
           }).catch((error)=>{
        res.json({'error': 'Error no Banco de dados'});
           });
});

app.get("/cliente/:id", (req,res)=>{
  let id = req.params.id;
   execSQl('select * from cliente where id=' + id).
     then((dados)=>{
        let obj = dados[0] || {};
         res.json(obj);  
     }).
     catch((error)=>{
         res.json({'error': 'Erro na busca pelo codigo'})  
     });
});

app.post("/cliente", (req,res)=>{
    //resgatando do Postman
    var nome = req.body.nome;
    var email = req.body.email;
execSQl(`insert into cliente(nome, email) values ('${nome}','${email}')`)
 .then((dados)=> res.json(dados))
 .catch((error)=> res.json({'error': error}));

});



var server= app.listen(3005,'localhost',function(){
    console.log('Escutando a Porta 3005');
})










