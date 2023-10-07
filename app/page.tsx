
import Hero from "./Components/HeroPage/Hero"
import Animejumptron  from './Components/AnimeJumptron'
import EpisodeJumptron from './Components/EpisodeJumptron'
import LatestAnimeJumptron from './Components/LatestAnimeJumptron'
import PinnedEpisodesJumprton from './Components/PinnedEpisodeJumptron'
import {Helmet} from "react-helmet";
import { Metadata } from "next/types"


export const metadata: Metadata = {
  title: 'AnimeNinja - لمشاهدة الانمي المترجم',
  openGraph : {
    title : 'AnimeNinja - لمشاهدة الانمي المترجم' ,
    url : 'https://animeninja.org' ,
    type : 'website' ,
    locale : 'ar_AR' ,
    siteName : 'AnimeNinja - لمشاهدة الانمي المترجم' ,
    description :'AnimeNinja - لمشاهدة الانمي المترجم' ,

  } ,
  description : 'RedAnime - لمشاهدة الانمي المترجم اون لاين' , 
  keywords : "انمي,ملخص انمي,انمي جديد,ملخصات انمي,تلخيص انمي,بتاع انمي,انمي حب,افلام انمي,مسلسلات انمي,انمي اكشن,انمي رومانسي,انمي في السريع,تلخيصات انمي,ملخص فيلم انمي,ملخص انمي كامل,انمي دراما,انمي مدرسي,بتاع انمي طوكيو غول,انميات اكشن,انمي كامل,ملخصات انميات,انمي رومنسي,بتاع انمي هجوم العمالقه,قصة انمي,انميات حب,انميات رومانسيه,انمي بينو,مضحك انمي,افضل انمي,انميات,انمي ناروتو,ملخص فلم انمي,انمي قديم,انمي هجوم العمالقة,ملخص انمي جديد"
 }


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
