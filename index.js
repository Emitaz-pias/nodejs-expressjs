const express = require("express");

const app = express();

app.get("/", (req, res) => res.send(" hello world!"));

app.get("/adaenterprise", (req, res) =>
  res.send({ name: "Mr.Adabor Khan", occupation: " ship information" })
);

app.listen(8080, () => console.log("app listening  to port 8080"));
