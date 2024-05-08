import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export const jokesGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
    console.log(route.routeConfig?.path);    // можно получить различную информацию о маршрутах, параметрах и ит.д.
    return confirm("Вы уверены, что хотите выйти с приколов?");
};