import { AnimeType } from '@prisma/client'
import {z , ZodError} from 'zod'
export const CreateGenerDto = z.object({
     name : z.string().nonempty('name is required') 

})

