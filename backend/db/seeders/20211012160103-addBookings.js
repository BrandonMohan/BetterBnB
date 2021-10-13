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
          spotId: 1,
          userId: 1,
          startDate: faker.date.soon(),
          endDate: faker.date.future(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 2,
          userId: 2,
          startDate: faker.date.soon(),
          endDate: faker.date.future(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 3,
          userId: 3,
          startDate: faker.date.soon(),
          endDate: faker.date.future(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 4,
          userId: 4,
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
