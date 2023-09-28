import client from "@/app/libs/prisma/prismaDb";
import axios from "axios";
import { NextResponse , NextRequest  } from 'next/server';
import extension from "prisma-paginate";


export async function GET(req : NextRequest  , res :NextResponse  ){

     const page = req.nextUrl.searchParams.get('page')
     const tag = req.nextUrl.searchParams.get('tag') as any
     const xprisma = client.$extends(extension);




  
       try {
          const result = await xprisma.anime.paginate({
               where :{
                    AnimeTags :{
                         some :{
                              tag : {
                                   name : decodeURI(tag) 
                              }
                         }
                    }
               },
               limit:12 , page : Number(page),
               include : {
                    AnimeTags : {
                         include :{
                              tag :true
                         }
                    },
               }
          })
         
         return NextResponse.json({result , hasNextPage : result.hasNextPage ,nextPage : result.hasNextPage && (await result.nextPage()).page})
     
     
     } catch (error : any ) {
         return NextResponse.json({err : error.message})
     }
  
   
   
}

