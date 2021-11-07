'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Hashtags', [
      {
        stack: 'JavaScript',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stack: 'TypeScript',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stack: 'React',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stack: 'NodeJS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stack: 'Python',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stack: 'Django',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stack: 'C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stack: 'Java',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stack: 'MySQL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Hashtags', null, {});
  },
};
