
import client from '@/app/libs/prisma/prismaDb';
import { CreateAnimeDto } from '@/app/types/DTO/Anime/CreateAnimeDto';
import { auth, clerkClient, currentUser } from '@clerk/nextjs';
// import { NextApiRequest, NextApiResponse } from 'next/types';
import { NextResponse, NextRequest  } from 'next/server'
import { ZodError } from 'zod';
export async function POST(req : NextRequest ) {
  const user =await currentUser()

async function saveData(rewData : any) : Promise<{success : boolean;error :any}> {
  
    
      try {
          const data = CreateAnimeDto.parse(rewData);
          
        
          await client.anime.create({data : data}).then(async (el) => {
            rewData?.tagsId.map(async (tag : any) => {
              await client.animeTags.create({data :{tagId : tag , animeId : el.id}})
             })
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
 