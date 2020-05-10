import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InputDataService {
   constructor(private _http: HttpClient) { }
   
   getCount() {
       return this._http.get('https://localhost:5001/api/prod/');
   }
}
