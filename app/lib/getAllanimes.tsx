
const getAllPosts = async () => {
  
    const posts =await fetch('https://redanime.net/api/anime/all')
    return posts.json();
  
};

export default getAllPosts;