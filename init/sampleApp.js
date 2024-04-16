const { mongoose } = require("mongoose");
const Book = require("../models/bookModel");

const initData = require("./data");

mongoose
  .connect("mongodb://localhost:27017/bookStore")
  .then(() => {
    console.log("Data Inserted");
  })
  .catch((err) => {
    console.log("Error inserting data", err);
  });

const initDB = async () => {
  try {
    await Book.deleteMany({});

    await Book.insertMany(initData.data);
    console.log("Data was initialized");
    console.log(initData.data);
  } catch (err) {
    console.log("Error in processing data", err);
  }
};

initDB();
