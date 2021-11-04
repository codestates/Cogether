const { User, Post, Post_hashtag, Hashtag } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { title, content, stacks } = req.body;

  console.log(stacks.length);

  // for (let i = 0; i < stacks.length; i++) {
  //   Post_hashtag.create({
  //     postId: 1,
  //     hashtagId: stacks[i],
  //   });

  await Post_hashtag.create({
    hashtagId: 1,
    postId: 1,
  });

  const find = await Post_hashtag.findAll();

  res.status(200).send({
    data: find,
  });

  // const stacks = stack.map((stack) => stack.value);
  // [1, 2, 3, 4, 5];
  // Post_hashtag.create({
  //   postId: 1,
  //   hashtagId: 3,
  // });

  // const hashtag1 = await Hashtag.findOne({
  //   where: {
  //     id: 1,
  //   },
  // });

  // const hashtag2 = await Hashtag.findOne({
  //   where: {
  //     stack: stacks,
  //   },
  // });

  // const posts1 = await hashtag1.getPosts();
  // const posts2 = await hashtag2.getPosts();

  // res.status(200).send({
  //   data: {
  //     posts1,
  //     posts2,
  //   },
  // });

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
