import type { MetadataRoute } from "next";
import getAllPosts from "./lib/getAllanimes";
import getAllEpisodes from "./lib/getAllepisodes";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await Promise.resolve().then(async () => await getAllPosts() );
  const episode = await Promise.resolve().then(async () => await getAllEpisodes() );
  const postUrls = posts && posts.map((post : any) => ({
      url: `https://animeninja.org/anime/${post.title}`,
      lastModified:new Date(),
    }))
  const episodeUrls = episode && episode.map((post : any) => ({
      url: `https://animeninja.org/watch/${post.anime.title}/${post.EpName}`,
      lastModified:new Date(),
    }))
  return [
    {
      url: `https://animeninja.org`,
      lastModified:new Date(),
    },
    {
      url: `https://animeninja.org/anime-list`,
      lastModified:new Date(),
    },
    {
      url: `https://animeninja.org/popular`,
      lastModified:new Date(),
    },
    ...postUrls ,
    ...episodeUrls


  ];
}

