import client from "@/app/libs/prisma/prismaDb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse , NextRequest  } from 'next/server';

import extension from "prisma-paginate";

export async function GET(req : NextRequest , res : NextResponse){
     const user =await currentUser()
     const page = req.nextUrl.searchParams.get('page') ?? ''
     const xprisma = client.$extends(extension);


    if(!user) {
        return NextResponse.json('You Should Login!')
    }
   

     // Gte Auth Users Post
     try {
    
       
          const result = await xprisma.notification.paginate({
               where :{
            
                   reciverId : user?.id 
                  
               },
               include :{
                Anime : {
                    select : {
                        imageUrl : true ,
                        id : true ,
                        title : true
                    }
                } ,
                episode : true
               },
               limit:12 , page : Number(page),
          })
         return NextResponse.json({result , hasNextPage : result.hasNextPage ,nextPage : result.hasNextPage && (await result.nextPage()).page})
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}