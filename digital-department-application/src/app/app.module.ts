import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{HomeComponent} from './pages/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ItalicDirective } from './pages/home/italic.directive'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { appRoutes } from './app.config';
import { LipglossComponent } from './pages/lipgloss/lipgloss.component';
import { FoundationComponent } from './pages/foundation/foundation.component';
import { ShadowsComponent } from './pages/shadows/shadows.component';

@NgModule({
    declarations: [
    HomeComponent,
    AppComponent,
    LipglossComponent,
    FoundationComponent,
    ShadowsComponent
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
        
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
