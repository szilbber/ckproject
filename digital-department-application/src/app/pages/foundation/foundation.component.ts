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

  myForm: FormGroup = new FormGroup({
    "radioControl": new FormControl(''),
    "segmentControl": new FormControl(this.segments[0].value),
    "brand": new FormControl(''),
    "color": new FormControl(''),
    "series": new FormControl('')

  });

  send() {
    this.foundations.push(this.myForm.getRawValue());
  }
  onreInitForm() {
    this.myForm = new FormGroup({
      "radioControl": new FormControl(''),
      "segmentControl": new FormControl(this.segments[0].value),
      "brand": new FormControl(''),
      "color": new FormControl(''),
      "series": new FormControl('')
    });
  }
  
}
