const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => res.send("Hello world!"));
app.listen(port, () =>
  console.log(
    `Example app listening sdfgsdfgdsfgfds g http://localhost:${port}`
  )
);
