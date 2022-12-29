// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const db = new Database("./src/db/cards.db", { verbose: console.log });
const { v4: uuidv4 } = require("uuid");

// Creamos el servidor
const server = express();
const saveCard = [];
// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: "25mb" }));
server.set("view engine", "ejs");

const serverPort = process.env.PORT || 4000; server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//END POINTS
server.post("/card", (req, res) => {
  if (
    req.body.name === "" ||
    req.body.job === "" ||
    req.body.email === "" ||
    req.body.phone === "" ||
    req.body.github === "" ||
    req.body.linkedin === "" ||
    req.body.photo === ""
  ) {
    const responseError = {
      error: "Faltan campos por rellenar",
      success: false,
    };
    res.json(responseError);
  } else {
    const newCard = req.body
    const insertStmt = db.prepare('INSERT INTO cards (palette, name, job, photo, email, phone, linkedin, github) VALUES (?,?,?,?,?,?,?,?) ');
    const result = insertStmt.run(
      newCard.palette,
      newCard.name,
      newCard.email,
      newCard.photo,
      newCard.phone,
      newCard.linkedin,
      newCard.github,
      newCard.job
    );
    console.log(result);
    // respuesta si todo va bien

    const responseSuccess = {
      cardURL: `http://localhost:4000/card/${result.lastInsertRowid}`,
      success: true,
    };
    res.json(responseSuccess);
  };
});


server.get("/card/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  //hace referencia a la tabla "cards"
  const query = db.prepare("SELECT * FROM cards WHERE id=?");
  const userCard = query.get(id);
  console.log(userCard);
  // este es el de views "card"
  res.render("card", userCard);
});

const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

const staticServerCssPath = "./src/public-css";
server.use(express.static(staticServerCssPath));
