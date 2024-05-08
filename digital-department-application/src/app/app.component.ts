import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { DoCheck } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{Routes} from '@angular/router';
import { RouterOutlet,RouterLink} from "@angular/router";

import { ItalicDirective } from './pages/home/italic.directive'; 


@Component({
    selector: "my-app",
    styles: `a {padding: 5px;
      background-color: #c36f6f;
      color: #000;
      display: flex;
      
    }
    nav{ 
      padding-bottom: 10px;
      padding-left: 10px;
      padding-right: 10px;
    }`
    ,
    template: `<div>
                    <nav>
                        <a routerLink="">Главная</a>
                        <a routerLink="/lipgloss">Блеск</a>
                        <a routerLink="/foundation">Тон</a>
                        <a routerLink="/shadows">Тени</a>
                    </nav>
                    <router-outlet></router-outlet>
              </div>
              `,
})
export class AppComponent{
  
  title = 'digital-department-application';

  greeting = "";

  
  onSayHi(): void {
    alert("Привет, " + this.greeting);
  }
}