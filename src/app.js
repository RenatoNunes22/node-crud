//IMPORTS PARA O CRUD
import express from "express";
import routes from "./routes/index.js";
import db from "./config/dbConnection.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});
const app = express();
routes(app);

app.use(manipuladorDeErros);

export default app;