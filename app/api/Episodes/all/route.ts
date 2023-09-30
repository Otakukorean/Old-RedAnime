import client from "@/app/libs/prisma/prismaDb";
import { NextResponse , NextRequest  } from 'next/server';

import NextCors from 'nextjs-cors';

export async function GET(req : any , res : any){

     await NextCors(req, res, {
          // Options
          methods: ['GET'],
          origin: '*',
          optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
       });
  
  

   

     // Gte Auth Users Post
     try {
       
          const result = await client.episodes.findMany({
               include :{
                    anime : {
                         select : {
                              title : true
                         }
                    }
               },

          })
         return NextResponse.json(result)
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}