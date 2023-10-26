const { Op } = require("sequelize");
const { Book, Category } = require("../../db/models");

module.exports = {
  getAllBooks: async (req, res, next) => {
    try {
      const { keyword = "", category = "" } = req.query;
      //   console.log(keyword);
      //   console.log(req.user);

      let condition = {
        user: req.user.id,
      };

      if (keyword != "") {
        condition = { ...condition, title: { [Op.like]: `%${keyword}%` } };
      }

      if (category != "") {
        condition = { ...condition, category: category };
      }

      const books = await Book.findAll({
        where: condition,
        include: {
          model: Category,
          attributes: ["id", "name"],
        },
      });

      res
        .status(200)
        .json({ message: "Success getting all books", data: books });
    } catch (error) {
      next(error);
    }
  },

  createBooks: async (req, res, next) => {
    try {
      let user = req.user.id;
      const { title, price, category, author, published, stock, image } =
        req.body;

      const checkCategory = await Category.findOne({
        where: { id: category, user: user },
      });

      if (!checkCategory) {
        res.status(404).json({ message: "id not found" });
      }

      const books = await Book.create({
        title,
        price,
        category,
        author,
        published,
        stock,
        image,
        user,
      });

      res.status(201).json({ message: "Success create book", data: books });
    } catch (error) {
      next(error);
    }
  },

  updateBook: async (req, res, next) => {
    try {
      let user = req.user.id;
      const { id } = req.params;
      const { title, price, category, author, published, stock, image } =
        req.body;

      const checkCategory = await Category.findOne({
        where: { id: category, user: user },
      });

      if (!checkCategory) {
        return res.status(404).json({ message: "Id category not found" });
      }

      const checkBook = await Book.findOne({ where: { id: id } });

      if (!checkBook) {
        return res.status(404).json({ message: "Id book not found" });
      }

      const books = await checkBook.update({
        title,
        price,
        category,
        author,
        published,
        stock,
        image,
        user: user,
      });

      res.status(200).json({ message: "Success update book", data: books });
    } catch (error) {
      next(error);
    }
  },

  deleteBook: async (req, res, next) => {
    try {
      const { id } = req.params;

      const book = await Book.findOne({ where: { id: id } });

      if (!book) {
        return res.status(404).json({ message: "id book not found" });
      }

      book.destroy();

      res.status(200).json({ message: "Success delete book", data: book });
    } catch (error) {
      next(error);
    }
  },
};
