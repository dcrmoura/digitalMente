const express = require("express");
const app = express();
const port = 3000;

// Configura o diretório de views para o EJS
app.set("view engine", "ejs");
app.set("views", "./views"); // Pasta onde seus arquivos .ejs estarão

// Configura o diretório de arquivos estáticos (CSS, JS, imagens)
app.use(express.static("public"));

// Rota principal
app.get("/", (req, res) => {
  res.render("index"); // Renderiza o arquivo index.ejs
});

// Inicia o servidor na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
