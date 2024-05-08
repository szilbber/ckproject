
import { Component} from "@angular/core";
import { FormsModule } from '@angular/forms';
import { DataService } from "./data.service";
import { HttpClientModule } from '@angular/common/http';
import { switchMap } from "rxjs";
@Component({
    selector: "about-app",
    template: 
    `<h2>О сайте</h2>
    <ul>
  <li *ngFor="let item of data">{{ item.name }}</li>
</ul>
              `,
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [DataService]
})
export class AboutComponent {
  data: any;
  activateRoute: any;
    
      constructor(private dataService: DataService) { }
    
      ngOnInit(): void {
        this.data = this.dataService.getData();
      }
    }