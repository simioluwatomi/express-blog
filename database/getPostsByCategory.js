const posts = [
  { id: 1, title: "Post 1", excerpt: "Excerpt 1", category: "category-1" },
  { id: 2, title: "Post 2", excerpt: "Excerpt 2", category: "category-2" },
  // Add more posts as needed
];

exports.getPostsByCategory = async (categorySlug) => {
  return posts.filter((post) => post.category === categorySlug);
};
