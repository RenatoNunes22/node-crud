import autores from "../models/autor.js";

//MÉTODO GET
class autorController {
  static listarAutores = async (req, res, next) => {
    try {
      const listaAutor = await autores.find();
      if(listaAutor !== null){
        res.status(200).json(listaAutor);
      } else {
        res.status(404).send({message: "Não há autores cadastrados"});
      }
    } catch(error){
      next(error);
    }

  };
  static selecionarAutor = async (req, res, next) => {
    try{
      const {id} = req.params;
      const BuscarAutor = await autores.findById(id);
      if(BuscarAutor !== null){
        res.status(200).json(BuscarAutor);
      } else {
        res.status(404).send({message: "Não há autores cadastrados"});
      }
    }catch(error){
      next(error);
    }
  };
  //MÉTODO POST
  static cadastrarAutor = async (req, res,next) => {
    try{
      let autor = new autores(req.body);
      await autor.save();
      res.status(201).send({message:`Autor cadastrado com sucesso!`});
    } catch (error) {
      next(error);
    }
  };
  //METODO PUT
  static atualizarAutor = async (req, res,next) => {
    const {id} = req.params;
    try{
      await autores.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: "autor atualizado com sucesso"});
    }catch (error){
      next(error);
    }
  };
  //MÉTODO DELETE
  static deletarAutor = async (req, res,next) => {
    try{
      const {id} = req.params;
      await autores.findByIdAndDelete(id);
      res.status(200).send({message: "autor removido com sucesso"});
    } catch (error) {
      next(error);
    }
  };
    };
export default autorController;