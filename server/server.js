const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//create express app
const app = express();

dotenv.config();

//connect to database
mongoose.connect(process.env.CONNECT_DB);

//middleware
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is up");
});

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => console.log(`listening to PORT ${PORT}`));
