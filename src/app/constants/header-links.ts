import { Route } from "@models/route.interface";
import { RoutePaths } from "@models/route-paths.enum";

export const headerLinks: Route[] = [
  { routeName: "Favorites", routePath: RoutePaths.FAVORITES, routeIcon: "heart-shine" },
  { routeName: "Watch later", routePath: RoutePaths.WATCH_LATER, routeIcon: "star-shine" },
]
