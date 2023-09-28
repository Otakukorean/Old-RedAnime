import { AnimeType } from '@prisma/client'
import {z , ZodError} from 'zod'
export const CreateAnimeDto = z.object({
     title : z.string().nonempty('title is required') ,
     secondtitle : z.string() ,
     type : z.nativeEnum(AnimeType) ,
     generId:z.number() ,
     description : z.string().nonempty('description is required ')  ,
     imageUrl : z.string().nonempty('imageUrl is required ')  ,
     backdropImage : z.string().nonempty('backdropImage is required ')  ,
     rating : z.number().gt(0 , "rating is required").nonnegative() ,
     pin : z.boolean() ,
     year : z.number() ,
     season : z.string().nonempty('season is required ')  ,
     status : z.string().nonempty('status is required ')  ,
     airday : z.string() ,


     
})

