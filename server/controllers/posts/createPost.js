const { User, Post, Post_hashtag, Hashtag } = require('../../models');
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
      userId: userInfo.id,
      nickname: userInfo.nickname,
      image: userInfo.image,
      title: title,
      content: content,
      stacks: stacks,
    });

    // post_hashtag 생성

    for (let i = 0; i < stacks.length; i++) {
      Post_hashtag.create({
        postId: post.id,
        hashtagId: stacks[i],
      });
    }

    res.status(200).send({
      data: {
        id: post.id,
        userId: userInfo.id,
        nickname: userInfo.nickname,
        image: userInfo.image,
        title: post.title,
        content: post.content,
        stacks: stacks,
        totalViews: post.totalViews,
        totalInterests: post.totalInterests,
        totalComments: post.totalComments,
        updatedAt: post.updatedAt,
        createdAt: post.createdAt,
      },
      message: 'create post successed',
    });
  } catch (err) {
    console.log(err);
  }
};
