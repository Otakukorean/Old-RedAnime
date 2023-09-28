import { AnimeType } from '@prisma/client'
import {z , ZodError} from 'zod'
export const DeleteGenerDto = z.object({
     id : z.number()

})

