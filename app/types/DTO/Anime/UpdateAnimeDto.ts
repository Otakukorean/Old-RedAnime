import { AnimeType } from '@prisma/client'
import {z , ZodError} from 'zod'
export const UpdateAnimeDto = z.object({
     id : z.number() ,
     title : z.string().nonempty('title is required') ,
     type : z.nativeEnum(AnimeType) ,
     description : z.string().nonempty('description is required ')  ,
     imageUrl : z.string().nonempty('imageUrl is required ')  ,
     backdropImage : z.string().nonempty('backdropImage is required ')  ,
     rating : z.number() ,
     pin : z.boolean() ,
     year : z.number() ,
     season : z.string().nonempty('season is required ')  ,
     status : z.string().nonempty('status is required ')  ,
     airday : z.string() ,


})

