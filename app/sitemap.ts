
 import getAllPosts from "./lib/getAllanimes";


export default async function sitemap(){
     const baseUrl = 'https://redanime.net';
     const posts =await getAllPosts();
  
     const postsUrl = posts.map((post : any) => {
          return {
               url : `${baseUrl}/anime/${post.title}` ,
               lastModified : new Date()
          }
     })
     // const Episodes = await getAllEpisodes();
     // const EpisodesUrl = Episodes.map((ep : any) => {
     //      return {
     //           url : `${baseUrl}/watch/${ep.anime.title}/${ep.EpName}` ,
     //           lastModified : new Date()
     //      }
     // })


     

     
  return [
    {
      url:baseUrl ,
      lastModified: new Date(),

    },
    ...postsUrl ,
   
  ]
}