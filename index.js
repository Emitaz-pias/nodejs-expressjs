const express = require("express");

const app = express();

const names = ["Ayesha", "bappi", "doremon", "emon", " kafed", "lattu"];

app.get("/", (req, res) => res.send(" hello world!"));

// how to pass an object
app.get("/adaenterprise", (req, res) =>
  res.send({ name: "Mr.Adabor Khan", occupation: " ship information" })
);
// how to pass  a data for a dynamic id
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const name = names[id];
  res.send(name);
  console.log(id);
});

app.listen(8080, () => console.log("app listening  to port 8080"));
