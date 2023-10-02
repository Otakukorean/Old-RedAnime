
import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

const publicPaths = ['/api/anime/getByname','/anime/:name','/watch/:name/:epname','/api/Episodes/GetByname','/anime-list' ,'/api/Episodes/recent','/api/anime/recent',"/","/api/anime/Get",'/api/anime/getById' , '/filter' ,  '/watch/:name/:epname','/api/anime/recent','/api/anime/filter','/api/tags/Get','/api/anime/getPinned','/popular','/api/anime/rating','/api/anime/all','/api/Episodes/all','/api/Gener/Get','/api/Episodes/getPinned' ,"/sign-in*", "/sign-up*",'/'];
const isPublic = (path: string) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );
};

export default withClerkMiddleware((request: NextRequest) => {
  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
});

// Stop Middleware running on static files
export const config = { matcher:  ["/((?!.*\\..*|_next).*)" , '/favourite' , '/history' , '/watch-later','/api/anime/Create','/api/anime/Update','/api/anime/Delete','/api/Episodes/Create','/api/Episodes/Delete','/api/favourite/Create','/api/favourite/Get','/api/Gener/Create','/api/history/Get','/api/history/ByUser' ,'/api/notifications/changetoread','/api/notifications/Get','/api/subscripe/Create','/api/subscripe/Create','/api/WatchLater/Create','/api/WatchLater/Get']};