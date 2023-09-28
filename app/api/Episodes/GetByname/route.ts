import client from "@/app/libs/prisma/prismaDb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse , NextRequest  } from 'next/server';


export async function GET(req : NextRequest , res : NextResponse ){

     const user = await currentUser()
     const epname = req.nextUrl.searchParams.get('epname') as any
     const animename = req.nextUrl.searchParams.get('animename') as any

     

     // Gte Auth Users Post
     try {
          const result = await client.episodes.findFirst({
               where : {
                    EpName : epname ?? "" ,
                    anime :{
                         title:animename
                    }
               } ,
               include : {
                    Servers : true ,
                    anime : true
               }
          }).then(async(res : any) => {
               const NextEpisode = await client.episodes.findFirst({
                    where : {
                         AND : [
                              {
                                   EpNumber : {
                                        gt : res?.EpNumber
                                   }
                              } ,
                              {
                                   anime : {
                                        title : res?.anime.title
                                   }
                              }
                              
                              
                         ] ,
                         NOT : [
                              {
                                   EpNumber : res?.EpNumber
                              }
                         ]
                    } ,
                    take : 1
               })
               const PrevEpisode = await client.episodes.findFirst({
                    where : {
                         AND : [
                              {
                                   EpNumber : res.EpNumber - 1
                              } ,
                              {
                                   anime : {
                                        title : res?.anime.title
                                   }
                              }
                              
                              
                         ] ,
                         NOT : [
                              {
                                   EpNumber : res?.EpNumber
                              }
                         ]
                    } ,
                    take : 1
               })
               const checkisSeen = await client.watchHistory.findFirst({
                    where :{
                         epId :  res?.id ,
                         userId : user?.id
                    }
               })
               if(user && !checkisSeen) {
                 
                         await client.watchHistory.create({data : {userId : user.id,epId : res?.id}})
                         return {
                              episode : res ,
                              NextEpisode : NextEpisode ,
                              PrevEpisode : PrevEpisode
                         }
                    
                
               }

                return {
                         episode : res ,
                         NextEpisode : NextEpisode ,
                     PrevEpisode : PrevEpisode
                }
             
               
           
          })

         return NextResponse.json(result)
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}