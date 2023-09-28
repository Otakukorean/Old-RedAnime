import client from "@/app/libs/prisma/prismaDb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse , NextRequest  } from 'next/server';


export async function PUT(req : NextRequest , res : NextResponse){
     const user =await currentUser()
     const epId = req.nextUrl.searchParams.get('epId') ?? ''
     const id = req.nextUrl.searchParams.get('id') ?? ''



   

     // Gte Auth Users Post
     try {
    
       
        const result = await client.notification.update({
          where : {
               id :Number(id) ,
               
          },
          data : {
               isread : true
          }
        })
         return NextResponse.json(result)
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}