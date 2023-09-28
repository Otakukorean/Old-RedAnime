import client from "@/app/libs/prisma/prismaDb";
import axios from "axios";
import { NextResponse , NextRequest  } from 'next/server';


export async function GET(req : NextRequest , res : NextResponse){
     const limit = 12;




   

     // Gte Auth Users Post
     try {
       
          const result = await client.episodes.findMany({
               where :{
                    pin : true
               } ,
               include :{
                    anime : true
               } ,
      
               take : limit ,
               orderBy :{
                    createdAt :'desc'
               }
    
          })
         return NextResponse.json({result : result})
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}