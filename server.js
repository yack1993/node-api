const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors') // para outros endereços acessarem a api
//install npm instal require-dir
const requireDir = require('require-dir')

//Iniciando o App
const app = express();
//Permitir q envie dados no formato json
app.use(express.json());
//configuar quais dominios podem acessar.
//desse jeito está para todos os dominios
app.use(cors()) 


//Iniciando o DB
//mongoose.connect('mongodb://user@password')bd com usuario e senha
//quando add no nodeapi, foi para criar o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useNewUrlParser: true }
);
requireDir('./src/models');

//const Product = mongoose.model('Product');



//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);