'use strict';
const faker = require('faker');



module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Spots', [
        {
          userId: 28,
          address: '123',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
          name: 'Cali house',
          price: 1.00,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 29,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 1.00,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 30,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 1.00,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 31,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 1.00,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 32,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 1.00,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 33,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 1.00,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 34,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 1.00,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 35,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 1.00,
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
      return queryInterface.bulkDelete('Spots', null, {});

  }
};
