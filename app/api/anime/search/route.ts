import client from "@/app/libs/prisma/prismaDb";
import { NextResponse , NextRequest  } from 'next/server';


export async function GET(req : NextRequest , res : NextResponse){

     const query = req.nextUrl.searchParams.get('query') ?? ''



     // Gte Auth Users Post
     try {
       
          const result = await client.anime.findMany({
               where : {
                    OR:[
                         {
                              title : {
                                   contains : query
                              }
                         } ,
                         {
                              secondtitle : {
                                   contains : query
                              }
                         }
                    ]
                   
               }
          })
         return NextResponse.json(result)
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}