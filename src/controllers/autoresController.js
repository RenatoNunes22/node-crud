import autores from "../models/autor.js"

//MÉTODO GET
class autorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.json(autores);
        })
    }
    static selecionarAutor = (req, res) => {
        const {id} = req.params
        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({message: `${err.message} - Falha ao procurar autor`})
            } else {
                res.status(200).send(autores)
            }
        })
    }
    //MÉTODO POST
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar autor`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }
    //METODO PUT
    static atualizarAutor = (req, res) => {
        const {id} = req.params;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Falha ao atualizar autor`})
            } else {
                res.status(200).send({message: "autor atualizado com sucesso"})
            }
        })
    }
    //MÉTODO DELETE
    static deletarAutor = (req, res) => {
        const {id} = req.params;
        autores.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Falha ao excluir autor`})
            } else {
                res.status(200).send({message: "autor removido com sucesso"})
            }
        })
    }
}

export default autorController;