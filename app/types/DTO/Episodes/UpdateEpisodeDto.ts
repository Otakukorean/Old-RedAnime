import {z } from 'zod'
export const UpdateEpisodeDto = z.object({
     id : z.number(),
     EpNumber : z.number() ,
     EpName :z.string().nonempty("EpName is Required") ,
     animeId : z.number(), 
     islast   :z.boolean() ,
     isfirst : z.boolean(),
     pin : z.boolean(),

})

