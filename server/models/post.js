'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      mainstack: DataTypes.INTEGER,
      totalViews: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      totalInterests: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      totalComments: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );
  return Post;
};
