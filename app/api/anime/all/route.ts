import client from "@/app/libs/prisma/prismaDb";
import { NextResponse , NextRequest  } from 'next/server';

export async function GET(req : any , res : any){

    
   

     // Gte Auth Users Post
     try {
       
          const result = await client.anime.findMany()
         return NextResponse.json(result)
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}
