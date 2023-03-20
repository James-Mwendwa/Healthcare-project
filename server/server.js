const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//create express app
const app = express();

//connect to database

//middleware
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("server is up");
});

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => console.log(`listening to PORT ${PORT}`));
