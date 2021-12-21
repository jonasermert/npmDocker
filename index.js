const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send ("Hallo, ich bin eine Express App in Docker"));

app.listen(port, () => console.log('Express App läuft auf port' + port));