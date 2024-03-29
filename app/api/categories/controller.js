const { Category } = require("../../db/models");

module.exports = {
  getAllCategories: async (req, res, next) => {
    try {
      //   console.log(req.user);
      const categories = await Category.findAll({
        where: { user: req.user.id },
        attributes: ["name", "id"],
      });

      res
        .status(200)
        .json({ message: "Success getting all categories", data: categories });
    } catch (error) {
      next(error);
    }
  },

  createCategories: async (req, res, next) => {
    try {
      const { name } = req.body;

      const categories = await Category.create({
        name,
        user: req.user.id,
      });

      res
        .status(201)
        .json({ message: "Success creating category", data: categories });
    } catch (error) {
      next(error);
    }
  },

  updateCategories: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const checkCategory = await Category.findOne({
        where: { id: id, user: req.user.id },
      });

      const categories = await checkCategory.update({ name });

      res
        .status(200)
        .json({ message: "Success updating category", data: categories });
    } catch (error) {
      next(error);
    }
  },

  deleteCategories: (req, res, next) => {
    Category.findOne({ where: { id: req.params.id, user: req.user.id } })
      .then((categories) => {
        if (categories) {
          categories.destroy();

          res
            .status(200)
            .json({ message: "Success deleting category", data: categories });
        }
      })
      .catch((err) => next(err));
  },
};
