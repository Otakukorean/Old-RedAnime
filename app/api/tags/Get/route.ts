import client from "@/app/libs/prisma/prismaDb";
import { NextResponse , NextRequest  } from 'next/server';


export async function GET(req : NextRequest , res : NextResponse){






     // Gte Auth Users Post
     try {
        const xprisma = client.$extends({
            result: {
              tags: {
                value: {
                  // the dependencies
                  needs: { id: true },
                  compute(tags) {
                    // the computation logic
                    return tags.id
                  },
                },
                label: {
                  // the dependencies
                  needs: { name: true },
                  compute(tags) {
                    // the computation logic
                    return tags.name
                  },
                },
              },
            },
          })
          const result = await xprisma.tags.findMany()
         return NextResponse.json(result)
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}