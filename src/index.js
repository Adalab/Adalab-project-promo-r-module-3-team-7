// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const db = new Database("./src/db/cards.db", { verbose: console.log });

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: "25mb" }));
server.set("view engine", "ejs");

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//END POINTS
server.post("/card", (req, res) => {
  //TODO: express II -> fake response
  const responseSuccess = {
    cardUrl: "https://dev.adalab.es/card/16715386762002278",
    success: true,
  };
  res.json(responseSuccess);
});

server.get("card/id", (req, res) => {
  const id = req.params.id;
  const query = db.prepare("SELECT * FROM card WHERE id=?");
  const userCard = query.get(id);
  res.render("card", userCard);
});
