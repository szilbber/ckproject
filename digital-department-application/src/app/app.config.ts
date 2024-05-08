import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
// компоненты, которые сопоставляются с маршрутами
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import { aboutGuard }   from "./pages/about/about.guard";
import { jokesGuard }   from './pages/jokes/jokes.guard';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import { JokesComponent } from './pages/jokes/jokes.component';
import { Lab5Component } from './pages/lab5/lab5.component';
import { Lab6Component } from './pages/lab6/lab6.component';
import { LipglossComponent } from './pages/lipgloss/lipgloss.component';
import { FoundationComponent } from './pages/foundation/foundation.component';
import { ShadowsComponent } from './pages/shadows/shadows.component';
// определение маршрутов
export const appRoutes: Routes =[
    { path: "", component: HomeComponent},
    { path: "about", component: AboutComponent, canActivate: [aboutGuard]},
    { path: "jokes", component: JokesComponent, canDeactivate: [jokesGuard]},
    { path: "jokes/:id", component: JokesComponent},
    { path: "lab5", component: Lab5Component},
    { path: "lab6", component: Lab6Component},
    {path: "lipgloss", component: LipglossComponent},
    {path: "foundation", component: FoundationComponent},
    {path: "shadows", component: ShadowsComponent},
    { path: "**", component: NotFoundComponent }
    
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),provideClientHydration()]
};