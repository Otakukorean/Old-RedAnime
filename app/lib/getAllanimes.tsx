

import axios from "axios"

const getAllPosts = async () => {
    const data = await axios.get('/api/anime/all')
 
  return data.data
};

export default getAllPosts;
