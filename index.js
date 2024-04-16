const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRoute = require("./routes/bookRoute");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/bookStore", {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

app.use("/book", bookRoute);

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
