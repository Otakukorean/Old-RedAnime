import axios from "axios";
const getAllEpisodes = async () => {
  
    const posts =await axios.get('/api/Episodes/all')
    return posts.data;
  
};

export default getAllEpisodes;