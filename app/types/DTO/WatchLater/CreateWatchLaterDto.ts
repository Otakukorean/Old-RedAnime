import { AnimeType } from '@prisma/client'
import {z , ZodError} from 'zod'
export const CreateWatchLaterDto = z.object({
   animeId : z.number()
     
})

