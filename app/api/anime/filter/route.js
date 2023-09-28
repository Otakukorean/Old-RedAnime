import client from "@/app/libs/prisma/prismaDb";
import axios from "axios";
import { NextResponse , NextRequest  } from 'next/server';
import extension from "prisma-paginate";
import { limiter } from "../../config/limiter";


export async function GET(req   , res  ){
     const remaining = await limiter.removeTokens(1)
     if(remaining < 0) {
          return new NextResponse(null,{
             status : 429 ,
             statusText : "Too Many Requests"  ,
         
          })
     }
     const page = req.nextUrl.searchParams.get('page')
     const geners  = req.nextUrl.searchParams.get('geners') 

     const xprisma = client.$extends(extension);

      const date = req.nextUrl.searchParams.get('date') ?? 'desc'
      const type =req.nextUrl.searchParams.get('type') 
      const year =req.nextUrl.searchParams.get('year')  
      const season =req.nextUrl.searchParams.get('season')  
      const status = req.nextUrl.searchParams.get('status')  

        if(geners) {
          const signes_array = geners?.split(",")?.map(function(item ) {
               return parseInt(item)
               })
           const result = await xprisma.anime.paginate({
                    where :{
                         ...(year ? { year:Number(year)  } : {}),
                         ...(type ? { type:type.toUpperCase()  } : {}),
                         ...(season ? { season: decodeURI(season)   } : {}),
                         ...(status ? { status: decodeURI(status)   } : {}),
                         ...(geners ? { AnimeTags: {
                              some : {
                                   tagId :{
                                        in : signes_array
                                   }
                              }
                         }  } : {}),
                  
                        
                    },
                    limit:12 , page : Number(page),
                    orderBy : {
                         createdAt : date
                    } ,
                    include : {
                         AnimeTags : true
                    }
               })
          

              return NextResponse.json({result  , hasNextPage : result.hasNextPage ,nextPage : result.hasNextPage && (await result.nextPage()).page})
        }
         
       try {
          const result = await xprisma.anime.paginate({
               where :{
                    ...(year ? { year:Number(year)  } : {}),
                    ...(type ? { type:type.toUpperCase()  } : {}),
                    ...(season ? { season:decodeURI(season)   } : {}),
                    ...(status ? { status: decodeURI(status)   } : {}),
               },
               limit:12 , page : Number(page),
               orderBy : {
                    createdAt : date
               } ,
               include : {
                    AnimeTags : {
                         include :{
                              tag :true
                         }
                    },
               }
          })
         
         return NextResponse.json({result , hasNextPage : result.hasNextPage ,nextPage : result.hasNextPage && (await result.nextPage()).page})
     
     
     } catch (error ) {
         return NextResponse.json({err : error.message})
     }
  
   
   
}

