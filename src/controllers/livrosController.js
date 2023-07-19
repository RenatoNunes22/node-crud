import livros from "../models/Livro.js";

//MÉTODO GET
class LivroController {
  static listarLivros = async (req, res) => {
    try{
        const listaLivro = await livros.find().populate("autor");
        res.status(200).json(listaLivro);
    } catch(error) {
      res.status(500).send({message: `${error.message} - Falha ao listar livros`});
    }
  };
  static selecionarLivro = async (req, res) => {
    const {id} = req.params;
    try{
      const selecionarLivro = await livros.findById(req.params.id).populate("autor");
      res.status(200).send(livros);
    } catch(error) {
      res.status(400).send({message: `${error.message} - Falha ao procurar livro`});
    }
  };
  static listarLivroPorEditora = async (req, res) => {
    const {editora} = req.query;
    try{
      const listaLivroEditora = await livros.find({"editora": editora},{});
      res.status(200).send(listaLivroEditora);
    } catch (error) {
      res.status(500).send({message: `${error.message} - Falha ao buscar livro`});
    }
  };
  //MÉTODO POST
  static cadastrarLivro = async (req, res) => {
    let livro = new livros(req.body);
    try{
      await livro.save();
      res.status(201).send(livro.toJSON());
    } catch (error){
        res.status(500).send({message: `${error.message} - Falha ao cadastrar livro`});
    }
  };
  //METODO PUT
  static atualizarLivro = async (req, res) => {
    const {id} = req.params;
    try{
      await livros.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: "Livro atualizado com sucesso"});
    } catch(error) {
      res.status(500).send({message: `${error.message} - Falha ao atualizar livro`});
    }
  };
  //MÉTODO DELETE
  static deletarLivro = async (req, res) => {
    const {id} = req.params;
    try{
      await livros.findByIdAndDelete(id)
      res.status(200).send({message: "Livro removido com sucesso"});
    } catch(error) {
      res.status(500).send({message: `${err.message} - Falha ao excluir livro`});
    }
  };
}
export default LivroController;