import client from "@/app/libs/prisma/prismaDb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse , NextRequest  } from 'next/server';


export async function GET(req : NextRequest , res : NextResponse){
     const user = await currentUser()


     if(!user) {
          return NextResponse.json("You Should be Login!")
     }

   

     // Gte Auth Users Post
     try {
       
          const result = await client.watchHistory.findMany({
               where : {
                    userId : user?.id
               },
               include :{
                    episode : {
                         include :{
                              anime : true
                         }
                    }
               },
          })
         return NextResponse.json(result)
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}