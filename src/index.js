const App = require("./app")

const app = new App()

const PORT = process.env.PORT || 8080

app.server.listen(PORT , ()=> {

    console.log(`Servidor do IFMK rodando na porta ${PORT}`);

})