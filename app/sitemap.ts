import type { MetadataRoute } from "next";
import getAllPosts from "./lib/getAllanimes";
import getAllEpisodes from "./lib/getAllepisodes";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const posts = await Promise.resolve().then(async () => await getAllPosts() );
  // const episode = await Promise.resolve().then(async () => await getAllEpisodes() );
  // const postUrls = posts && posts.map((post : any) => ({
  //     url: `https://redanime.net/anime/${post.title}`,
  //     lastModified:new Date(),
  //   }))
  // const episodeUrls = episode && episode.map((post : any) => ({
  //     url: `https://redanime.net/watch/${post.anime.title}/${post.EpName}`,
  //     lastModified:new Date(),
  //   }))
  return [
    {
      url: `https://redanime.net`,
      lastModified:new Date(),
    },
    {
      url: `https://redanime.net/anime-list`,
      lastModified:new Date(),
    },
    {
      url: `https://redanime.net/popular`,
      lastModified:new Date(),
    },
    // ...postUrls ,
    // ...episodeUrls


  ];
}

