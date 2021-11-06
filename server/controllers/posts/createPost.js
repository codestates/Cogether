const { User, Post, Post_hashtag, Post_comment } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { title, content, stacks } = req.body;
  const auth = isAuthorized(req);

  if (!auth) {
    return res.status(401).send({
      message: 'unauthorized user',
    });
  }

  try {
    const userInfo = await User.findOne({
      where: {
        id: auth.id,
      },
      attributes: ['id', 'nickname', 'image'],
    });

    // create post

    const post = await Post.create({
      userId: auth.id,
      title: title,
      content: content,
      mainstack: stacks[0],
    });

    // post_hashtag 생성

    stacks.forEach((stack) => {
      Post_hashtag.create({
        postId: post.id,
        hashtagId: stack,
      });
    });

    const totalComments = await Post_comment.count({
      where: {
        postId: post.id,
      },
    });

    res.status(200).send({
      data: {
        id: post.id,
        userId: userInfo.id,
        title: post.title,
        content: post.content,
        stacks: stacks,
        mainstack: stacks[0],
        totalViews: post.totalViews,
        totalInterests: post.totalInterests,
        totalComments: totalComments,
        updatedAt: post.updatedAt,
        createdAt: post.createdAt,
      },
      message: 'create post successed',
    });
  } catch (err) {
    console.log(err);
  }
};
