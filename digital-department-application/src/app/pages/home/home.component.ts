import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users:any[] = [];

  myForm: FormGroup = new FormGroup({
    "username": new FormControl('', Validators.required),
    "watsup": new FormControl('', Validators.required)
  });
  constructor(){
    this.onreInitForm();
  }
  onSubmit(){
    //console.log(this.myForm.getRawValue());
    this.users.push(this.myForm.getRawValue());

  }
  onreInitForm(){
      this.myForm = new FormGroup({
        "username": new FormControl('', Validators.required),
        "watsup": new FormControl('', Validators.required)
      });
  }
}


