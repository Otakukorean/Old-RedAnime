
import client from '@/app/libs/prisma/prismaDb';
import { UpdateAnimeDto } from '@/app/types/DTO/Anime/UpdateAnimeDto';
import { auth, clerkClient, currentUser } from '@clerk/nextjs';
// import { NextApiRequest, NextApiResponse } from 'next/types';
import { NextResponse, NextRequest  } from 'next/server'
import { ZodError } from 'zod';
export async function PUT(req : NextRequest ) {
  const user =await currentUser()

async function saveData(rewData : any) : Promise<{success : boolean;error :any}> {
  
    
      try {
          const data = UpdateAnimeDto.parse(rewData);
          const {id , ...newData} = data;
        
          await client.anime.update({
               data: newData,
               where: {
                    id : data.id
               }
          })
       
       
        
      } catch (error) {
        if(error instanceof ZodError) {
          return {success : false ,error :error.flatten()}
        }
        else {
          throw error;
        }
       
      }
      return {success : true ,error :null}


   }

   
    

   if(user?.privateMetadata.role === "admin") {
    const result =await saveData(await req.json())
    return NextResponse.json(result)

   
   }

   else {
    return  NextResponse.json(null)
   }




  

}
 