import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lipgloss',
  templateUrl: './lipgloss.component.html',
  styleUrl: './lipgloss.component.css'
})
export class LipglossComponent {
  lipglosses: any[] = [];
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
    this.lipglosses.push(this.myForm.getRawValue());
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
    this.myForm.controls['number'].setValue(this.lipglosses[this.numberToChange-1].number);
    this.lipglosses[this.numberToChange-1] = (this.myForm.getRawValue());
  }


}
