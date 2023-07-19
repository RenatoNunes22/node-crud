import livros from "../models/Livro.js";

//MÉTODO GET
class LivroController {
  static listarLivros = async (req, res, next) => {
    try{
      const listaLivro = await livros.find().populate("autor");
      if(listaLivro !== null){
        res.status(200).json(listaLivro);
      } else {
        res.status(404).send({message: "Não há livros cadastrados"});
      }

    } catch(error) {
      next(error);
    }
  };
  static selecionarLivro = async (req, res, next) => {
    try{
      const {id} = req.params;
      const selecionarLivro = await livros.findById(id).populate("autor");
      if(selecionarLivro !== null) {
        res.status(200).send(selecionarLivro);
      } else {
        res.status(404).send({message: "Livro não encontrado"});
      }
    } catch(error) {
      next(error)
    }
  };
  static listarLivroPorEditora = async (req, res) => {
    try{
      const {editora} = req.query;
      const listaLivroEditora = await livros.find({"editora": editora},{});
      if(listaLivroEditora.length !== null) {
        res.status(200).send(listaLivroEditora);
      } else{
        res.status(404).send({message: "Não há livros cadastrados para essa editora"});
      }

    } catch (error) {
      next(error);
    }
  };
  //MÉTODO POST
  static cadastrarLivro = async (req, res, error) => {
    try{
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).send(livro.toJSON());
    } catch (error){
      next(error);
    }
  };
  //METODO PUT
  static atualizarLivro = async (req, res, next) => {
    try{
      const {id} = req.params;
      await livros.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: "Livro atualizado com sucesso"});
    } catch(error) {
      next(error);
    }
  };
  //MÉTODO DELETE
  static deletarLivro = async (req, res, next) => {
    try{
      const {id} = req.params;
      await livros.findByIdAndDelete(id)
      res.status(200).send({message: "Livro removido com sucesso"});
    } catch(error) {
      next(error);
    }
  };
}
export default LivroController;