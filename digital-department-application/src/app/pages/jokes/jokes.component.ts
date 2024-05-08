import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap} from 'rxjs';
import {Subscription} from "rxjs";
import { Inject, Injectable } from '@angular/core';



// export class User {
//   constructor(public name: string, public age: number, public surname: string){}
// }

export class User {
  constructor(@Inject('UserName') public name: string, @Inject('age') public age: number, @Inject('SurName') public surname: string) {
  }
}
// @Injectable({
//   providedIn: 'root'
// })
@Component({
  selector: 'jokes-app',
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent {

  id: number | undefined;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, private router: Router) {

    this.subscription = activateRoute.params.subscribe(params => this.id = params["id"]);
  }

  ngOnInit() {
    this.activateRoute.paramMap
      .pipe(switchMap((params: any) => params.getAll('id')))
      .subscribe((data: any) => this.id = +data);
  }

  goToMain() {
    this.router.navigateByUrl('/');
  }


  users: User[] = [];
  name = '';
  surname = '';
  age = 0;

  addUser() {
    this.users.push(new User(this.name, this.age, this.surname));
    this.name = '';
    this.surname = '';
    this.age = 0;
  }

  onNameChange(): void {
    console.log('Что-то изменилось в поле ' + this.name);
  }
}
