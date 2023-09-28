import axios from 'axios';
import { MetadataRoute } from 'next'
import getAllPosts from './lib/getAllanimes';
 
const getAnimes= async () => {
     const result = await fetch('http://localhost:3000/api/anime/all')
     return result.json()
}
const getAllEpisodes = async () =>{ 
     const result = await fetch('http://localhost:3000/api/Episodes/all')
     return result.json()
}


export default async function sitemap(){
     const baseUrl = 'https://redanime.net';
     const posts =await getAnimes();
  
     const postsUrl = posts.map((post : any) => {
          return {
               url : `${baseUrl}/anime/${post.title}` ,
               lastModified : new Date()
          }
     })
     const Episodes = await getAllEpisodes();
     const EpisodesUrl = Episodes.map((ep : any) => {
          return {
               url : `${baseUrl}/watch/${ep.anime.title}/${ep.EpName}` ,
               lastModified : new Date()
          }
     })


     

     
  return [
    {
      url:baseUrl ,
      lastModified: new Date(),

    },
    ...postsUrl ,
    ...EpisodesUrl
  ]
}