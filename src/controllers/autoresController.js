import autores from "../models/autor.js";

//MÉTODO GET
class autorController {
  static listarAutores = async (req, res) => {
    try {
      const listaAutor = await autores.find();
      res.status(200).json(listaAutor);
    } catch(error){
      console.log("ERROR: " + error);
    }

  };
  static selecionarAutor = async (req, res) => {
    try{
      const {id} = req.params;
      const BuscarAutor = await autores.findById(id);
      res.status(200).json(BuscarAutor);
    }catch(error){
      res.status(400).send({message: `${error.message} - Falha ao procurar autor`});
    }
  };
  //MÉTODO POST
  static cadastrarAutor = async (req, res) => {
    try{
      let autor = new autores(req.body);
      await autor.save();
      res.status(201).send({message:`Autor cadastrado com sucesso!`});
    } catch (error) {
      res.status(500).send({message: `${error.message} - Falha ao cadastrar autor`});
    }
  };
  //METODO PUT
  static atualizarAutor = async (req, res) => {
    const {id} = req.params;
    try{
      await autores.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: "autor atualizado com sucesso"});
    }catch (error){
      res.status(500).send({message: `${error.message} - Falha ao atualizar autor`});
    }
  };
  //MÉTODO DELETE
  static deletarAutor = async (req, res) => {
    try{
      const {id} = req.params;
      await autores.findByIdAndDelete(id);
      res.status(200).send({message: "autor removido com sucesso"});
    } catch (error) {
      res.status(500).send({message: `${error.message} - Falha ao excluir autor`});
    }
  };
    };
export default autorController;