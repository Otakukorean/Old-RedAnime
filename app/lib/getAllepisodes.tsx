import axios from "axios";
const getAllEpisodes = async () => {
    const data = await axios.get('/api/Episodes/all')
 
  return data.data

  
};

export default getAllEpisodes;
