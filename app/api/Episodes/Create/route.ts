
import client from '@/app/libs/prisma/prismaDb';
import { CreateEpisodeDto } from '@/app/types/DTO/Episodes/CreateEpisodeDto';
import { auth, clerkClient, currentUser } from '@clerk/nextjs';
// import { NextApiRequest, NextApiResponse } from 'next/types';
import { NextResponse, NextRequest  } from 'next/server'
import { ZodError } from 'zod';
export async function POST(req : NextRequest ) {
  const user =await currentUser()
  


  
async function saveData(rewData : any) : Promise<{success : boolean;error :any}> {
    
      try {
          const data = CreateEpisodeDto.parse(rewData);
          
          await client.episodes.create({data : data}).then(async (el) => {
            rewData?.Servers.map(async (tag : any) => {
              await client.servers.create({data :{ServerName : tag.name ,ServerUrl : tag.ServerUrl , epId : el.id}})
             })
           const subscripe = await client.subscripe.findMany({
            where : {
              animeId : el.animeId
            }
           })
           const data = subscripe.map((dt) => (
            {
              reciverId : dt.userId ,
              animeId : dt.animeId ,
              epId :el?.id
            }
           ))
           await client.notification.createMany({
            data : data
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
 