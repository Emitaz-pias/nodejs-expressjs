const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

const names = ["Ayesha", "bappi", "doremon", "emon", " kafed", "lattu"];

app.get("/", (req, res) => res.send(" hello world!"));
app.use(cors());
// how to pass an object
app.get("/adaenterprise", (req, res) =>
  res.send({ name: "Mr.Adabor Khan", occupation: " ship information" })
);
// how to pass  a data for a dynamic id
// app.get("/user/:id", (req, res) => {
//   const id = req.params.id;
//   const name = names[id];
//   res.send(name);
//   console.log(id);
// });

// pass data like json
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = { id: id, name: names[id] };
  res.send(user);
});
// post data to backend
app.post("/addUser", cors(), (req, res) => {
  console.log("data recieved", req.body);
});

app.listen(8080, () => console.log("app listening  to port 8080"));
