import axios from "axios";
const getAllPosts = async () => {
  
    const posts =await axios.get('/api/anime/all')
    return posts.data;
  
};

export default getAllPosts;