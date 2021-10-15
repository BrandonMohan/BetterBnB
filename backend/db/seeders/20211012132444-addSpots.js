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
          userId: 1,
          address: '123',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
          name: 'Cali house',
          price: 250.00,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 187.48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 1557.58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 2548.90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 14553.25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 2547.50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 845.05,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 894.56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 843.51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 883.51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 654.25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 354.20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 651.50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 1463.50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 453.20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 984.50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 17,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 615.50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 18,
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
          name: faker.lorem.word(),
          price: 345.50,
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
