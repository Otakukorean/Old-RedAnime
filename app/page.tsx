'use client'

import Hero from "./Components/HeroPage/Hero"
import Animejumptron  from './Components/AnimeJumptron'
import EpisodeJumptron from './Components/EpisodeJumptron'
import LatestAnimeJumptron from './Components/LatestAnimeJumptron'
import PinnedEpisodesJumprton from './Components/PinnedEpisodeJumptron'
export default function Home() {
  return (
    <>
    <title>RedAnime - لمشاهدة الانمي المترجم</title>
    <main>
        <Hero/>
        <Animejumptron url="/api/anime/getPinned" title="الانميات المثبتة" />
        <PinnedEpisodesJumprton url="/api/Episodes/getPinned" title="الحلقات المثبتة"   />
        <LatestAnimeJumptron url="/api/anime/recent" title=" الانميات المضافة حديثا" />
        <EpisodeJumptron url="/api/Episodes/recent" title=" الحلقات المضافة حديثا"  />
    </main>
    </>
  )
}
