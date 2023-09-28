import client from "@/app/libs/prisma/prismaDb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse , NextRequest  } from 'next/server';


export async function GET(req : NextRequest , res : NextResponse){
     const user = await currentUser()
     const limit = 10;
     const cursor = req.nextUrl.searchParams.get('cursor') ?? ''
     const cursorObj = cursor === "" ? undefined :{id :Number(cursor)   }

     if(!user) {
          return NextResponse.json("You Should be Login!")
     }

   

     // Gte Auth Users Post
     try {
       
          const result = await client.subscripe.findMany({
               where : {
                    userId : user?.id
               },
               include :{
                    anime : true
               },
               cursor : cursorObj ,
               take : limit ,
               skip : cursor ==="" ? 0: 1, 
               orderBy : {
                    createdAt : 'desc'
               }
          })
         return NextResponse.json({result , nextId : result.length === limit ? result[limit - 1].id : undefined})
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}