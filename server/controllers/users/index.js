'use strict';

module.exports = {
  userController: {
    signup: require('./signup'),
    signin: require('./signin'),
    oauth: require('./oauth'),
    signout: require('./signout'),
    userinfo: require('./userinfo'),
    updateUserinfo: require('./updateUserinfo'),
    delete: require('./delete'),
  },
};
