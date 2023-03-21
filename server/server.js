const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoute");

//create express app
const app = express();

dotenv.config();

//connect to database
mongoose.connect(process.env.CONNECT_DB);

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// route middleware
app.use("/", userRouter);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => console.log(`listening to PORT ${PORT}`));
