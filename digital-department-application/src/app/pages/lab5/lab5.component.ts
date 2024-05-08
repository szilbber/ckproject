import { Component, OnInit } from '@angular/core';
import { ReversePipe } from '../../core/pipes/reverse.pipe';
import { DataService } from '../../core/servises/data.service';
import { Car } from '../../core/servises/data.service';
import { filter, map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lab5',
  templateUrl: './lab5.component.html',
  styleUrl: './lab5.component.css',
  providers: [DataService]
})
export class Lab5Component implements OnInit {
  exampleArray = ['Я', 'выучу', 'ангуляр'];

  cars: Car[] = [];
  
  constructor(private dataService: DataService){}
  ngOnInit(): void {
      this.dataService.getData()
      .pipe(
        filter(data => data!=null),
        map((data=>(data.map(car => ({...car, name: car.name + 'SUPER'})))))
      )
      .subscribe((cars)=>{
        this.cars = cars;
      })
  }
}
