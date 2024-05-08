import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
// компоненты, которые сопоставляются с маршрутами
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import { LipglossComponent } from './pages/lipgloss/lipgloss.component';
import { FoundationComponent } from './pages/foundation/foundation.component';
import { ShadowsComponent } from './pages/shadows/shadows.component';
// определение маршрутов
export const appRoutes: Routes =[
    { path: "", component: HomeComponent},
    {path: "lipgloss", component: LipglossComponent},
    {path: "foundation", component: FoundationComponent},
    {path: "shadows", component: ShadowsComponent},
    { path: "**", component: NotFoundComponent }
    
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),provideClientHydration()]
};