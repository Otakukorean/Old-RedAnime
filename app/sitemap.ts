import type { MetadataRoute } from "next";
import getAllPosts from "./lib/getAllanimes";
import getAllEpisodes from "./lib/getAllepisodes";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await Promise.resolve().then(async () => await getAllPosts() );
  const episodes = await Promise.resolve().then(async () => await getAllEpisodes() );
  const postUrls =
    posts &&
    posts.map((post : any) => ({
      url: `https://redanim.net/anime/${post.title}`,
      lastModified:Date.now(),
    }));
  const episodeUrls =
    posts &&
    episodes.map((post : any) => ({
      url: `https://redanim.net/anime/${post.title}`,
      lastModified:Date.now(),
    }));

  return [
    {
      url: `https://redanim.net`,
      lastModified:Date.now(),
    },
    {
      url: `https://redanim.net/anime-list`,
      lastModified:Date.now(),
    },
    {
      url: `https://redanim.net/popular`,
      lastModified:Date.now(),
    },
    ...postUrls ,
    ...episodeUrls
  
  ];
}