'use strict';

const { sequelize } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      totalViews: {
        type: Sequelize.INTEGER,
      },
      totalInterests: {
        type: Sequelize.INTEGER,
      },
      totalComments: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  },
};
