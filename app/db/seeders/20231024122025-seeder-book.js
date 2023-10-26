"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Kean Season of the Book series of the Amazon",
          author: "Smith",
          image: "/uploads/image 1.png",
          published: new Date(),
          price: 55,
          stock: 8,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '"Selena" dan "Nebula"',
          author: "daniel",
          image: "/uploads/image 2.png",
          published: new Date(),
          price: 89,
          stock: 9,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pelukis Bisu",
          author: "Alex Michaelides",
          image: "/uploads/image 3.png",
          published: new Date(),
          price: 63,
          stock: 4,
          user: 1,
          category: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kitab Suci",
          author: "Lian",
          image: "/uploads/image 4.png",
          published: new Date(),
          price: 73,
          stock: 12,
          user: 1,
          category: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pemancing handal",
          author: "rutiam",
          image: "/uploads/image 5.png",
          published: new Date(),
          price: 39,
          stock: 74,
          user: 1,
          category: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Land building strategy",
          author: "wecke",
          image: "/uploads/image 6.png",
          published: new Date(),
          price: 86,
          stock: 55,
          user: 1,
          category: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
