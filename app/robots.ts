import {MetadataRoute} from 'next'

export default function robots() : MetadataRoute.Robots {
     return {
          rules : {
               userAgent : '*' ,
               allow : ['/','/anime/:name','/anime-list','/tags/:tagname','/watch/:name/:epname','/popular'] ,
               disallow : ['/history' , '/favourite' , '/watch-later']
          } ,
          sitemap : 'https://localhost:3000/sitemap.xml'
     }
}
