const database = require("../database"); 


exports.category = async (req, res) => {
  try {
    const categorySlug = req.params.slug;
    const posts = await database.getPostsByCategory(categorySlug);
    res.render("category", { title: `Category: ${categorySlug}`, posts });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.postDetail = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await database.getPostById(postId);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.render("postDetail", { title: post.title, post });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
