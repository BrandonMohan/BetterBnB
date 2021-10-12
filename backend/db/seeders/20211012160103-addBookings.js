'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Bookings', [
        {
          spotId: 4,
          userId: 28,
          startDate: faker.date.soon(),
          endDate: faker.date.future(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 5,
          userId: 29,
          startDate: faker.date.soon(),
          endDate: faker.date.future(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 6,
          userId: 30,
          startDate: faker.date.soon(),
          endDate: faker.date.future(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 7,
          userId: 31,
          startDate: faker.date.soon(),
          endDate: faker.date.future(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Bookings', null, {});

  }
};
