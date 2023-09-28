
import client from '@/app/libs/prisma/prismaDb';
import { DeleteAnimeDto } from '@/app/types/DTO/Anime/DeleteAnimeDto';
import { auth, clerkClient, currentUser } from '@clerk/nextjs';
// import { NextApiRequest, NextApiResponse } from 'next/types';
import { NextResponse, NextRequest  } from 'next/server'
import { ZodError } from 'zod';
export async function DELETE(req : NextRequest ) {
  const user =await currentUser()

  const animeId = req.nextUrl.searchParams.get('animeId') 



   
    

   if(user?.privateMetadata.role === "admin") {
    const result =   await client.anime.delete({
     where : {
          id : Number(animeId)
     }
})
    return NextResponse.json(result)

   
   }

   else {
    return  NextResponse.json(null)
   }




  

}
 