const dummy = (blogs) => {
  // when i call dummy([]), i expect to get 1
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favBlog = (blogs) => {
  const fav = blogs.reduce((mostLiked, blog) =>
    blog.likes > mostLiked.likes ? blog : mostLiked,
  );
  return {
    title: fav.title,
    author: fav.author,
    likes: fav.likes,
  };
};

export default {
  dummy,
  totalLikes,
  favBlog,
};
