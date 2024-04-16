const mongoose = require("mongoose");
const Book = require("../models/bookModel");

module.exports.index = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.create = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
  });
  try {
    const created = await book.save();
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.Update = async (req, res) => {
  const id = req.params.id;
  try {
    const UpdatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(UpdatedBook);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// module.exports.Delete = async (req, res) => {
//   try {
//     let { id } = req.params;
//     let deleted = await Book.findByIdAndDelete(id);
//     console.log(deleted);
//   } catch (err) {
//     res.status(404).json({ message: "Book not found" });
//   }
// };

module.exports.Destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.status(204).json({ message: "Successfully deleted" });
  } catch {
    res.status(404).json({ message: "Book not found" });
  }
};
