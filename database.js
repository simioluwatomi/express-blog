const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Full content of Post 1",
    category: "category-1",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Full content of Post 2",
    category: "category-2",
  },
  // Add more posts as needed
];

exports.getPostsByCategory = async (categorySlug) => {
  return posts.filter((post) => post.category === categorySlug);
};

exports.getPostById = async (id) => {
  return posts.find((post) => post.id === parseInt(id));
};
