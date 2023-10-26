const express = require("express");
const router = express.Router();
const { auth } = require("../../middleware/auth");
const {
  getAllBooks,
  createBooks,
  updateBook,
  deleteBook,
} = require("./controller");

router.get("/books", auth, getAllBooks);
router.post("/books", auth, createBooks);
router.put("/books/:id", auth, updateBook);
router.delete("/books/:id", auth, deleteBook);

module.exports = router;
