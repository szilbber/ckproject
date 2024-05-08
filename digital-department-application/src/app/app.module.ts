import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{NotFoundComponent} from './pages/not-found/not-found.component';
import{HomeComponent} from './pages/home/home.component';
import { provideRouter, Routes } from "@angular/router";
import { ApplicationConfig } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DataService } from './pages/about/data.service';
import { ItalicDirective } from './pages/home/italic.directive'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { JokesComponent } from './pages/jokes/jokes.component';
import { appRoutes } from './app.config';
import { ReversePipe } from './core/pipes/reverse.pipe';
import { Lab5Component } from './pages/lab5/lab5.component';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';
import { Lab6Component } from './pages/lab6/lab6.component';
// const appRoutes: Routes = [
//     {path:'',component: HomeComponent},
//     {path:'**', component: NotFoundComponent}
// ];
@NgModule({
    declarations: [
    ItalicDirective,
    JokesComponent,
    HomeComponent,
    AppComponent,
    ReversePipe,
    Lab5Component,
    Lab6Component
],
    imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    RouterOutlet,
    HttpClientModule,
    CommonModule
],
    providers: [
        DatePipe,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
// export const appConfig: ApplicationConfig = {
//     providers: [provideRouter(appRoutes)]
// };