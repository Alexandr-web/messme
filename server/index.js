const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("./models/index");
require("./connectToDB")();

app.use(cors({ origin: ["http://localhost:3000"], }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

const authRouter = require("./routers/auth.router");
const userRouter = require("./routers/user.router");
const groupRouter = require("./routers/group.router");
const messageRouter = require("./routers/message.router");

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/group", groupRouter);
app.use("/api/message", messageRouter);

app.listen(5000, () => console.log("Server has been started!"));