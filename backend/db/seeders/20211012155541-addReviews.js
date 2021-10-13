'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Reviews', [{
        userId: 1,
        spotId: 1,
        review: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        spotId: 2,
        review: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        spotId: 3,
        review: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        spotId: 4,
        review: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        spotId: 5,
        review: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
