const { User, Post, Post_hashtag, Post_comment } = require('../../models');
const { isAuthorized } = require('../../utils/helpFunc');

module.exports = async (req, res) => {
  const { id } = req.params;
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
    // update post
    await Post.update(
      {
        title: title,
        content: content,
        mainstack: stacks[0],
      },
      {
        where: {
          id,
        },
      }
    );

    const updatedPost = await Post.findOne({
      where: {
        id,
      },
    });

    // update post_hashtag

    // await stacks.forEach((stack) => {
    //   Post_hashtag.update(
    //     {
    //       hashtagId: stack,
    //     },
    //     {
    //       where: {
    //         postId: id,
    //       },
    //     }
    //   );
    // });

    const totalComments = await Post_comment.count({
      where: {
        postId: updatedPost.id,
      },
    });

    res.status(200).send({
      data: {
        id: updatedPost.id,
        userId: userInfo.id,
        title: updatedPost.title,
        content: updatedPost.content,
        stacks: stacks,
        mainstack: stacks[0],
        totalViews: updatedPost.totalViews,
        totalInterests: updatedPost.totalInterests,
        totalComments: totalComments,
        updatedAt: updatedPost.updatedAt,
        createdAt: updatedPost.createdAt,
      },
      message: 'update post successed',
    });
  } catch (err) {
    console.log(err);
  }
};
