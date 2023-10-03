'use client'

import Hero from "./Components/HeroPage/Hero"
import Animejumptron  from './Components/AnimeJumptron'
import EpisodeJumptron from './Components/EpisodeJumptron'
import LatestAnimeJumptron from './Components/LatestAnimeJumptron'
import PinnedEpisodesJumprton from './Components/PinnedEpisodeJumptron'


export default function Home() {
  return (
    <>
 
    <main>
        <Hero/>
        <Animejumptron  title="الانميات المثبتة" />
        <PinnedEpisodesJumprton  title="الحلقات المثبتة"   />
        <LatestAnimeJumptron  title=" الانميات المضافة حديثا" />
        <EpisodeJumptron  title=" الحلقات المضافة حديثا"  />
    </main>
    </>
  )
}
