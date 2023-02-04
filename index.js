require('dotenv').config();

const express = require("express");
const cors = require("cors");

const app = express();
// app.use(cors());

app.use(
    cors({
      credentials: true,
      // origin: '*',
      origin: process.env.ORIGIN,
    })
  );

app.get("/", (req, res) => {
    res.download("./HanhResume.png");
});

app.listen(8080);