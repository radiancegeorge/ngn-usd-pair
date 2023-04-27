const express = require("express");
const cors = require("cors");
const getPair = require("./utils/pairs");

const app = express();

app.use(cors());

let pair;
app.get("/ngn", (req, res) => {
  res.send(pair);
});

setTimeout(async () => {
  pair = await getPair();
}, 10000);

app.listen(
  process.env.app_port,
  console.log.bind(this, `listening on port ::: ${process.env.app_port}`)
);
