import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/","/api/anime/Get",'/api/anime/getById' , '/filter' , '/anime/:name' , '/watch/:name/:epname','/api/anime/recent','/api/anime/filter','/api/tags/Get','/api/anime/recent','/api/anime/getPinned','/api/anime/getByname','/popular','/api/anime/rating','/api/anime/all','/api/Episodes/all','/api/Epidoses/getPinned','/api/Gener/Get'],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)" , '/favourite' , '/history' , '/watch-later','/api/anime/Create','/api/anime/Update','/api/anime/Delete','/api/Episodes/Create','/api/Episodes/Delete','/api/favourite/Create','/api/favourite/Get','/api/Gener/Create','/api/history/Get','/api/history/ByUser' ,'/api/notifications/changetoread','/api/notifications/Get','/api/subscripe/Create','/api/subscripe/Create','/api/WatchLater/Create','/api/WatchLater/Get'],
};