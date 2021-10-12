'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Images', [{
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-11818704/original/c380529a-7f12-4c30-af65-4069e62849be.jpeg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 28,
        url: 'https://a0.muscache.com/im/pictures/fbefcdeb-48b8-4dab-9791-f3fec1e13aa7.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/d9c89de3-3c81-4587-b374-565864540f10.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/5443ac84-9269-40dd-a1e6-90de98d3d8dc.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 31,
        url: 'https://a0.muscache.com/im/pictures/3486700d-42f7-40cb-a104-c5abd3302725.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 32,
        url: 'https://a0.muscache.com/im/pictures/4d2e689c-a7ef-4327-9561-df14e1ae1091.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 33,
        url: 'https://a0.muscache.com/im/pictures/cbd81a71-2dff-47fe-9f92-383cb0dcca67.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 34,
        url: 'https://a0.muscache.com/im/pictures/a13eea10-5c9e-406c-a899-60a792bfe821.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 35,
        url: 'https://a0.muscache.com/im/pictures/62e43778-4d90-4824-ab22-c64a0b21084f.jpg?im_w=1440',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 36,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-40886372/original/5e30eb9d-7fa8-41bb-981e-7315a65c79f5.jpeg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 37,
        url: 'https://a0.muscache.com/im/pictures/b49db791-9939-4667-b8f5-b48b9a075cb9.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 38,
        url: 'https://a0.muscache.com/im/pictures/ba085fa3-1a44-4f15-8a0e-c39ea9cc0997.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 39,
        url: 'https://a0.muscache.com/im/pictures/a2ee4641-734b-469e-8490-70fabd55c90a.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 40,
        url: 'https://a0.muscache.com/im/pictures/3cec82fd-f9c4-4254-a609-68b6f7917b13.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 41,
        url: 'https://a0.muscache.com/im/pictures/9979d37f-1de0-4c5b-b04e-400f7616459a.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 42,
        url: 'https://a0.muscache.com/im/pictures/5026334/06d820ea_original.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 43,
        url: 'https://a0.muscache.com/im/pictures/e64f7fc8-d522-4d36-afff-274e2b8950d3.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 44,
        url: 'https://a0.muscache.com/im/pictures/6de1c566-3de7-4a70-8a86-8170e2a60871.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
