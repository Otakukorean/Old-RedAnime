import { AnimeType } from '@prisma/client'
import {z , ZodError} from 'zod'
export const DeleteAnimeDto = z.object({
     id : z.number() 
})

