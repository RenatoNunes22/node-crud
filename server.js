import app from "./src/app.js"

//DEFINIR A PORTA QUE O SERVIDOR ESTÁ RODANDO
const port = process.env.PORT || 4001
app.listen(port, () => {
  console.log(`Servidor escutando na porta : ${port} `)
})