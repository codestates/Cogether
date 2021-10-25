module.exports = {
  userController: {
    signup: require('./signup'),
    signin: require('./signin'),
    ouath: require('./oauth'),
    signout: require('./signout'),
    userinfo: require('./userinfo'),
    updateUserinfo: require('./updateUserinfo'),
    delete: require('./delete'),
  },
};
