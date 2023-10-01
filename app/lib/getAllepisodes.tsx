import axios from "axios";
const getAllEpisodes = async () => {
  
    const posts =await fetch('https://redanime.net/api/Episodes/all', {
     method :'GET'
 })
    return posts.json();
  
};

export default getAllEpisodes;
