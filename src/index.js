// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({limit: '25mb'}));

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
        success: true
    }
    res.json(responseSuccess);
});

//Draws card
// server.get("card/id", (req, res) => {
//  //TODO: express III
// })