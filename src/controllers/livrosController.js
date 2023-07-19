import livros from "../models/Livro.js";

//MÉTODO GET
class LivroController {
  static listarLivros = (req, res) => {
    livros.find()
      .populate("autor")
      .exec((err, livros) => {
        res.json(livros);
      });
  };
  static selecionarLivro = (req, res) => {
    const {id} = req.params;
    livros.findById(id)
      .populate("autor", "nome")
      .exec((err, livros) => {
        if (err) {
          res.status(400).send({message: `${err.message} - Falha ao procurar livro`});
        } else {
          res.status(200).send(livros);
        }
      });
  };
  static listarLivroPorEditora = (req, res) => {
    const {editora} = req.query;
    livros.find({"editora": editora}, {}, (err, livros) => {
      if (err) {
        res.status(500).send({message: `${err.message} - Falha ao buscar livro`});
      } else {
        res.status(200).send(livros);
      }
    });
  };
  //MÉTODO POST
  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - Falha ao cadastrar livro`});
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };
  //METODO PUT
  static atualizarLivro = (req, res) => {
    const {id} = req.params;
    livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - Falha ao atualizar livro`});
      } else {
        res.status(200).send({message: "Livro atualizado com sucesso"});
      }
    });
  };
  //MÉTODO DELETE
  static deletarLivro = (req, res) => {
    const {id} = req.params;
    livros.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - Falha ao excluir livro`});
      } else {
        res.status(200).send({message: "Livro removido com sucesso"});
      }
    });
  };

}

export default LivroController;