import client from "@/app/libs/prisma/prismaDb";
import { currentUser } from "@clerk/nextjs";
import axios from "axios";
import { NextResponse , NextRequest  } from 'next/server';


export async function GET(req : NextRequest , res : NextResponse ){
     const user = await currentUser()

     const name = req.nextUrl.searchParams.get('name') as any

     

     // Gte Auth Users Post
     try {
          if(!user) {
               const firstResult = await client.anime.findUnique({where :{
                    title : name ,
               },include :{
                    AnimeTags : {
                         include :{
                              tag :{
                                   
                              }
                         }
                    },
                    Episodes : {
                         orderBy :{
                              EpNumber : 'asc'
                         }
                    } ,     
     
               }}) 
               return NextResponse.json(firstResult)
          }
          const result = await client.anime.findUnique({where :{
               title : name ,
          },include :{
               AnimeTags : {
                    include :{
                         tag :{
                              
                         }
                    }
               },
               Episodes : true ,  
               favoriteList : {
                    where :{
                         userId : user?.id
                    }
               },
               WatchLater : {
                    where :{
                         userId : user?.id
                    }
               }   ,
               Subscripe :{
                    where :{
                         userId : user?.id
                    }
               }  

          }}).then( async (res) => {          
               const getrelevent = await client.anime.findMany({
                    where :{
                         NOT : [
                              {
                                   id : res?.id
                              }
                         ] ,
                         AnimeTags : {
                              some : {
                                  tagId : {
                                   in : res?.AnimeTags?.map((el) => {
                                        return el?.tagId
                                   })
                                  }
                              }
                         }
                    }
               })
               return {
                    anime : res ,
                    relevant : getrelevent 
               }
          })
         return NextResponse.json(result)
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}