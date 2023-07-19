
import mongoose from "mongoose";
export default function manipuladorDeErros(error, req, res, next) {
  if(error instanceof mongoose.Error.CastError) {
    res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos."})
  } else if(error instanceof mongoose.Error.ValidationError) {
    const msg = Object.values(error.errors).map(e => e.message);
    res.status(400).send({message: "Os seguintes erros foram encontrados: " + msg})
  }else {
    res.status(500).send({message: "Erro interno de servidor."})
  }
}