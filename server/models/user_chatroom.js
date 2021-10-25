'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_chatroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_chatroom.init({
    userId: DataTypes.INTEGER,
    chatroomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_chatroom',
  });
  return user_chatroom;
};