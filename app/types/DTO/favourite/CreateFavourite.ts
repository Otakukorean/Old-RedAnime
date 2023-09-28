import { AnimeType } from '@prisma/client'
import {z , ZodError} from 'zod'
export const CreateFavourite = z.object({
   animeId : z.number()
     
})

