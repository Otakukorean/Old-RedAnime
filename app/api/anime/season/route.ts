import client from "@/app/libs/prisma/prismaDb";
import { NextResponse , NextRequest  } from 'next/server';

import extension from "prisma-paginate";

export async function GET(req : NextRequest , res : NextResponse){
     const page = req.nextUrl.searchParams.get('page') ?? '' as any
     const year = req.nextUrl.searchParams.get('year') as any
     const season = req.nextUrl.searchParams.get('season') as any
     const xprisma = client.$extends(extension);


   

     // Gte Auth Users Post
     try {
       
          const result = await xprisma.anime.paginate({
               where :{
                    year : Number(year) ,
                    season : decodeURI(season) 
               },
               limit:12 ,
               page : Number(page)

               
          })
         return NextResponse.json({result  , hasNextPage : result.hasNextPage ,nextPage : result.hasNextPage && (await result.nextPage()).page })
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}