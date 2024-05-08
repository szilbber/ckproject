import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // constructor(private http: HttpClient) {}

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];

  //   if (file) {
  //     const formData = new FormData();
  //     formData.append('image', file, 'image1.jpg');

  //     this.http.post('/api/upload', formData)
  //       .subscribe(res => {
  //         console.log(res);
  //       });
  //   }
  // }
}


