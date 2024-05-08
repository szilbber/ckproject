import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrl: './foundation.component.css'
})
export class FoundationComponent {
  foundations: any[] = [];
  segments = [
    { value: '', label: '' },
    { value: 'luxury', label: 'люкс' },
    { value: 'middle', label: 'миддл' },
    { value: 'cheap', label: 'бюджетный' }
  ];
  
  i: number = 1;
  myForm: FormGroup = new FormGroup({
    "number": new FormControl<number>(this.i),
    "radioControl": new FormControl(''),
    "segmentControl": new FormControl(this.segments[0].value),
    "brand": new FormControl(''),
    "color": new FormControl(''),
    "series": new FormControl('')

  });


  send() {
    this.myForm.controls['number'].setValue(this.i);
    this.foundations.push(this.myForm.getRawValue());
    this.i++;
  }
  onreInitForm() {
    this.myForm = new FormGroup({
      "number": new FormControl<number>(this.i),
      "radioControl": new FormControl(''),
      "segmentControl": new FormControl(this.segments[0].value),
      "brand": new FormControl(''),
      "color": new FormControl(''),
      "series": new FormControl('')
    });
  }

  numberToChange: number = 1;
  constructor() {}
  changeObject() {
    this.myForm.controls['number'].setValue(this.foundations[this.numberToChange-1].number);
    this.foundations[this.numberToChange-1] = (this.myForm.getRawValue());
  }


  
}
