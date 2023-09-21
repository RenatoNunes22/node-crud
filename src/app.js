//IMPORTS PARA O CRUD
import express from "express";
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"
import routes from "./routes/index.js"
//CONEXÃO COM O BANCO DE DADOS
db.on("erro", console.log.bind(console, "Erro de conexão com o banco de dados"))
db.once("open", () =>{
  console.log("Conexão com o banco de dados realizado com sucesso")
})
const app = express()
routes(app)

export default app;