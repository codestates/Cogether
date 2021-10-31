require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME || root,
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'cogether_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: '',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: '',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
