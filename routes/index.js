var express = require('express');
var router = express.Router();
var fs = require('fs');
const { parse, isSameDay, isBefore } = require("date-fns");

/* GET home page. */
router.get('/', function (req, res, next) {
  let rawdata = fs.readFileSync('./database/posts.json');

  let data = JSON.parse(rawdata).sort(function (a, b) {
    let dateOne = parse(a.created_at, 'yyyy-MM-dd', new Date())

    let dateTwo = parse(b.created_at, 'yyyy-MM-dd', new Date());

    if (isSameDay(dateOne, dateTwo)) {
      return 0;
    }

    if (isBefore(dateOne, dateTwo)) {
      return 1;
    }

    return -1;
  });

  let navigationLinks = Array.from(new Set(data.map((post) => post.category).sort()));

  let dates = data.map(function (post) {
    let [year, month] = post.created_at.split('-');
    return new Date(`${year}-${month}-01`);
  });

  res.render('index', {
    title: 'She Code Queens',
    links: navigationLinks,
    posts: data.filter((post) => !post.is_featured),
    featuredPosts: data.filter((post) => post.is_featured),
    archives: Array.from(new Set(dates))
  });

});

module.exports = router;
/*GET CATEGORIES PAGE */
router.get('/categories/:category', (req, res) => {
  const category = req.params.category;
  const posts = queryBlogPostsByCategory(category);
  res.render('categories', { category, posts });
});

// Function to query blog posts by category
function queryBlogPostsByCategory(category) {
  const allPosts = [
    { id: 1, title: 'Post 1', category: 'technology' },
    { id: 2, title: 'Post 2', category: 'technology' },
    { id: 3, title: 'Post 3', category: 'nature' },
    { id: 4, title: 'Post 4', category: 'nature' },
  ];

  // Filter the posts by category
  const filteredPosts = allPosts.filter(post => post.category === category);
  return filteredPosts;
}
/*Get post page */
router.get('/post/:id', (req, res) => {
  const postId = req.params.id;
  const post = queryBlogPostById(postId); // Implement this function
  res.render('post', { post });
});

