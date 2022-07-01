const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const engine = require("ejs-mate");
const isAuthenticated = require("./isAuthenticated");
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connecting to Database");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.engine("ejs", engine);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
//ROUTES
app.get("/list", (req, res, next) => {
  res.render("index", {
    what: `SSO-Consumer One `,
    title: "Chua dc thong qua",
  });
});
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

app.listen(8000, () => {
  console.log("Server is running");
});
