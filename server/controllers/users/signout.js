const { isAuthorized } = require('../../utils/helpFunc');

module.exports = (req, res) => {
  const auth = isAuthorized(req);

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorzied user',
    });
  }

  try {
    if (req.headers.Authorization || req.cookies.authorization) {
      delete req.headers.authorization;
    }

    res
      .clearCookie('authorization', {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        path: '/',
        domail: '/',
      })
      .status(205)
      .send({
        message: 'sign out successed',
      });
  } catch (err) {
    console.log(err);
  }
};
