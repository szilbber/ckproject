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
    styles: `
    // a {padding: 5px;
    //   background-color: #c36f6f;
    //   color: #000;
    //   display: flex;
      
    // }
    ul {
      list-style-type: none;
      margin-bottom: 15px;
      padding: 5px;
      overflow: hidden;
      background-color: #c36f6f;
  }
  
  li {
      float: left;
  }
  
  li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
  }
  
  li a:hover {
      background-color: #d14949;
  }
    `
    ,
    template: `<div>
                    <ul>
                        <li><a routerLink="">Главная</a></li>
                        <li><a routerLink="/lipgloss">Блеск</a></li>
                        <li><a routerLink="/foundation">Тон</a></li>
                        <li><a routerLink="/shadows">Тени</a></li>
                    </ul>
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