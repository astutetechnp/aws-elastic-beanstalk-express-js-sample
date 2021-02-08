const express = require("express");
const app = express();
const port = 8080;

//home
app.get("/", (req, res) => res.send("Hello World on AWS Cloud. Great!"));

app.get("/products", (req, res) => res.send("products api "));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
