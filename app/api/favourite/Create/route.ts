
import client from '@/app/libs/prisma/prismaDb';
import { CreateFavourite } from '@/app/types/DTO/favourite/CreateFavourite';
import { auth, clerkClient, currentUser } from '@clerk/nextjs';
// import { NextApiRequest, NextApiResponse } from 'next/types';
import { NextResponse, NextRequest  } from 'next/server'
import { ZodError } from 'zod';
import { limiter } from '../../config/limiter';
export async function POST(req : NextRequest ) {
  const user =await currentUser()
  const remaining = await limiter.removeTokens(1)
  if(remaining < 0) {
       return new NextResponse(null,{
          status : 429 ,
          statusText : "Too Many Requests"  ,
      
       })
  }
async function saveData(rewData : any) : Promise<{success : boolean;error :any}> {
   

    
      try {

          
          const data = CreateFavourite.parse(rewData);
          const ifExist = await client.favoriteList.findFirst({
               where : {
                    userId : user?.id ,
                    animeId : data.animeId
               }
          })
          if(!ifExist) {
               await client.favoriteList.create({data : {
                    userId : user?.id as any ,
                    animeId : data.animeId
               }})
          }
          else {
               await client.favoriteList.deleteMany({
                    where :{
                         userId : user?.id as any ,
                         animeId : data.animeId 
                    }
               })
          }
     
       
        
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
 