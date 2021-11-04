const { User, Post, Post_hashtag, Hashtag } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { title, content, stacks } = req.body;

  console.log(stacks);
  console.log(stacks[0].value);
  console.log(stacks[0].label);

  res.sendStatus(200);

  // const auth = isAuthorized(req);

  // if (!auth) {
  //   return res.status(401).send({
  //     message: 'unauthorized user',
  //   });
  // }

  // try {
  //   const userInfo = await User.findOne({
  //     where: {
  //       id: auth.id,
  //     },
  //     attributes: ['nickname', 'image'],
  //   });

  //   const post = await Post.create({
  //     userId: userInfo.id,
  //     nickname: userInfo.nickname,
  //     title: title,
  //     content: content,
  //     stacks: stacks,
  //   });

  //   const hashtags = await Post_hashtag.create({
  //     // postId: post.id,
  //     stacks: stacks,
  //   });

  //   res.status(200).send({
  //     data: {
  //       id: post.id,
  //       userId: userInfo.id,
  //       nickname: userInfo.nickname,
  //       image: userInfo.image,
  //       title: post.title,
  //       content: post.content,
  //       stacks: hashtags.stacks,
  //       totalViews: post.totalViews,
  //       totalInterests: post.totalInterests,
  //       totalComments: post.totalComments,
  //       updatedAt: post.updatedAt,
  //       createdAt: post.createdAt,
  //     },
  //     message: 'create post successed',
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
};
