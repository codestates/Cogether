'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

const {
  User,
  Post,
  Chatroom,
  Chatting,
  Evaluation,
  Hashtag,
  Post_comment,
  Post_hashtag,
  Post_interest,
  User_chatroom,
} = sequelize.models;

// Many to Many

// User <-> Chatroom
User.belongsToMany(Chatroom, {
  through: 'User_chatroom',
  foreignKey: 'userId',
});
Chatroom.belongsToMany(User, {
  through: 'User_chatroom',
  foreignKey: 'chatroomId',
});

// User <-> Post (Post_interest)
// User.belongsToMany(Post, {
//   through: 'Post_interest',
//   foreignKey: 'userId',
// });
// Post.belongsToMany(User, {
//   through: 'Post_interest',
//   foreignKey: 'postId',
// });

// User <-> Post (Post_comment)
// User.belongsToMany(Post, { through: 'Post_comment', foreignKey: 'userId' });
// Post.belongsToMany(User, { through: 'Post_comment', foreignKey: 'postId' });

// Post <-> Hashtag (Post_hashtag)
// Post.belongsToMany(Hashtag, { through: 'Post_hashtag', foreignKey: 'postId' });
// Hashtag.belongsToMany(Post, {
//   through: 'Post_hashtag',
//   foreignKey: 'hashtagId',
// });

// One to Many

// Chatroom 1 : N Chatting
Chatroom.hasMany(Chatting, { foreignKey: 'chatroomId', sourceKey: 'id' });
Chatting.belongsTo(Chatroom, { foreignKey: 'chatroomId', sourceKey: 'id' });

// User 1 : N Post
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

// User 1 : N Chatting
User.hasMany(Chatting, { foreignKey: 'userId', sourceKey: 'id' });
Chatting.belongsTo(User, { foreignKey: 'userId', sourceKey: 'id' });

// User 1 : N Post_comment
User.hasMany(Post_comment, { foreignKey: 'userId', sourceKey: 'id' });
Post_comment.belongsTo(User, { foreignKey: 'userId', sourceKey: 'id' });

// User 1: N Post_ineterest
User.hasMany(Post_interest, { foreignKey: 'userId', sourceKey: 'id' });
Post_interest.belongsTo(User, { foreignKey: 'userId', sourceKey: 'id' });

// User 1 : N Chatroom
User.hasMany(Chatroom);
Chatroom.belongsTo(User);

// Post 1 : N Post_hashtag
Post.hasMany(Post_hashtag, { foreignKey: 'postId', sourceKey: 'id' });
Post_hashtag.belongsTo(Post, { foreignKey: 'postId', sourceKey: 'id' });

// Post 1: N Post_ineterest
Post.hasMany(Post_interest, { foreignKey: 'postId', sourceKey: 'id' });
Post_interest.belongsTo(Post, { foreignKey: 'postId', sourceKey: 'id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
