import mongoose from "mongoose"

//CONEXÃO COM O BANCO DE DADOS
mongoose.connect("mongodb+srv://renatonunes:root@aluranode.ezhgk78.mongodb.net/aluranode");
let db = mongoose.connection;

export default db;