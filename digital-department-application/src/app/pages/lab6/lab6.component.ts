import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'lab6-app',
  templateUrl: './lab6.component.html',
  styleUrl: './lab6.component.css'
})
export class Lab6Component {
  tasks:any[] = [];
  prioritys = [
    { value: '', label: '' },
    { value: 'critical', label: 'critical' },
    { value: 'heigh', label: 'heigh' },
    { value: 'medium', label: 'medium' },
    { value: 'low', label: 'low' }
  ];
  
  // dateTimeControl = new FormControl<Date>(new Date());
  timeControl = new FormControl<string>('');
  timeChangeControl = new FormControl<string>('');
  timeSubscription: Subscription = new Subscription();
  i: number = 1;
  // number = new FormControl<number>(this.i++);
  myForm: FormGroup = new FormGroup({
    "number": new FormControl<number>(this.i),
    "radioControl":  new FormControl('', Validators.required),
    "priorityControl": new FormControl(this.prioritys[0].value),
    "status": new FormControl('', Validators.required),
    "title": new FormControl('', Validators.required),
    "description": new FormControl(''),
    "man": new FormControl(''),
    "creator": new FormControl('', Validators.required),
    "timeControl": this.timeControl,
    "timeChangeControl": this.timeChangeControl
  });

  


  constructor(private cdr: ChangeDetectorRef){
    this.onreInitForm();
  }
  send(){
    this.myForm.controls['number'].setValue(this.i);
    this.tasks.push(this.myForm.getRawValue());
    this.i++;
  }
  onreInitForm(){
      this.myForm = new FormGroup({
        "number": new FormControl<number>(this.i),
        "radioControl":  new FormControl('', Validators.required),
        "priorityControl": new FormControl(this.prioritys[0].value),
        "status": new FormControl('', Validators.required),
        "title": new FormControl('', Validators.required),
        "description": new FormControl(''),
        "man": new FormControl(''),
        "creator": new FormControl('', Validators.required),
        "timeControl": this.timeControl,
        "timeChangeControl": this.timeChangeControl
      });
  }
  ngOnInit() {
    this.timeSubscription = interval(1000)
      .pipe(
        map(() => new Date().toLocaleTimeString([], { month: '2-digit',day: '2-digit',hour: '2-digit', minute: '2-digit', second: '2-digit' })) 
      )
      .subscribe(time => {
        this.timeControl.setValue(time);
        this.timeChangeControl.setValue(time);
      });
  
    }
  ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }

  changeTask(){
    this.myForm.controls['timeControl'].setValue(this.tasks[this.i-2].timeControl);
    this.tasks[this.i-2] = (this.myForm.getRawValue());
  }
}