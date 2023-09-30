
import client from '@/app/libs/prisma/prismaDb';
import { UpdateEpisodeDto } from '@/app/types/DTO/Episodes/UpdateEpisodeDto';
import { auth, clerkClient, currentUser } from '@clerk/nextjs';
// import { NextApiRequest, NextApiResponse } from 'next/types';
import { NextResponse, NextRequest  } from 'next/server'
import { ZodError } from 'zod';
export async function PUT(req : NextRequest ) {
  const user =await currentUser()
  


  
async function saveData(rewData : any) : Promise<{success : boolean;error :any}> {
    
      try {
          const data = UpdateEpisodeDto.parse(rewData);
          
          await client.episodes.update({data : data ,where :{
               id : data?.id
          }}).then(async (el) => {
            rewData?.Servers.map(async (tag : any) => {
              await client.servers.upsert({update :{ServerName : tag.ServerName ,ServerUrl : tag.ServerUrl , epId : el.id} ,create:{ServerName : tag.ServerName ,ServerUrl : tag.ServerUrl , epId : el.id},where :{
               id : tag.id
              }})
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
 