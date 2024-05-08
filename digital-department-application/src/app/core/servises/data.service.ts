import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, pipe } from "rxjs";

export interface Car{
    id: number;
    name: string;
    number: string;
    sport: boolean;
}
@Injectable({providedIn:'root'})
export class DataService{
    constructor(private http: HttpClient){}

    getData(): Observable<Array<Car>>{
        return this.http.get<Array<Car>>('assets/data.json')
            .pipe(
                catchError(err=>{
                    console.log(err);
                    return of([]);
                })
            )
    }
}
