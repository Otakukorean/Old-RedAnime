import client from "@/app/libs/prisma/prismaDb";
import { NextResponse , NextRequest  } from 'next/server';


export async function GET(req : NextRequest , res : NextResponse){






     // Gte Auth Users Post
     try {
        const xprisma = client.$extends({
            result: {
              gener: {
                value: {
                  // the dependencies
                  needs: { id: true },
                  compute(gener) {
                    // the computation logic
                    return gener.id
                  },
                },
                label: {
                  // the dependencies
                  needs: { name: true },
                  compute(gener) {
                    // the computation logic
                    return gener.name
                  },
                },
              },
            },
          })
          const result = await xprisma.gener.findMany()
         return NextResponse.json(result)
     } catch (error: any) {
         return NextResponse.json({err : error.message})
     }

}