const express = require("express");
const mongoose = require("mongoose");
// require("dotenv").config({ path: __dirname + "/config/.env" });
const path = require("path");
const config = require("config");

const usersRouter = require("./routes/api/Users");
const itemsRoute = require("./routes/api/Items");
const authRoute = require("./routes/api/Auth");

const port = config.get("PORT") || 5000;
const app = express();

//BodyParser Middleware
app.use(express.json());

//Middlware Routes
app.use("/api/items", itemsRoute);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRoute);

//connect to mongo
const db = config.get("mongoURL");
mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to DB");
  }
);

//Serve Static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});