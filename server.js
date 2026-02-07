const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;
const NAME = "CARLOS NAVARRETE";  // ✅ FIJO

app.get("/hello", (req, res) => {
  res.send(`Hola ${NAME}`);
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
