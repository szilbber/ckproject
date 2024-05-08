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
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   imports: [FormsModule,
//     RouterOutlet
//   ],
//   standalone: true,
//   template: `<div>
//                     <h1>Приложение Angular</h1>
//                     <router-outlet></router-outlet>
//               </div>`,
// })

@Component({
    selector: "my-app",
    styles: `a {padding: 5px;}`,
    template: `<div>
                    <nav>
                        <a routerLink="">Главная</a>
                        <a routerLink="/about">О сайте</a>
                        <a routerLink="/jokes">Приколы</a>
                        <a routerLink="/lab5">Лаба5</a>
                        <a routerLink="/lab6">Лаба6</a>
                    </nav>
                    <router-outlet></router-outlet>
              </div>
              `,
})
export class AppComponent{
  // items: string[] = [];
  //   name: string = "";
  //   constructor(private dataService: DataService){}
      
  //   addItem(name: string){
          
  //       this.dataService.addData(name);
  //   }
  //   ngOnInit(){
  //       this.items = this.dataService.getData();
  //   }
  ngOnInit(): void {
    console.log("Я родился");
  }
  ngOnChanges():void {
    console.log("Я изменился");
}
  ngDoCheck():void {
    console.log("Я проверился");
  }
  ngAfterContentInit():void{
    console.log("Контент родился");
  }

  ngAfterContentChecked() {
    console.log("Контент проверился");
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`);
  }

  ngOnDestroy() { 
    console.log("Я ухожу"); 
  }
  title = 'digital-department-application';

  greeting = "";

  
  onSayHi(): void {
    alert("Привет, " + this.greeting);
  }
}