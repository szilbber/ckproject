// export class DataService{

//     private data: string[] = [ "Tom", "Bob",  "Sam"];
    
//     getData(): string[] {
        
//         return this.data;
//     }
//     addData(name: string){
        
//         this.data.push(name);
//     }
// }
// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getData(): any {
        let xhr = new XMLHttpRequest();
        xhr.open('GET',  './assets/data.json', false);
        xhr.send();
        if (xhr.status !== 200) {
            console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
        }
        else {
            return (xhr.responseText);
        }
    }
}