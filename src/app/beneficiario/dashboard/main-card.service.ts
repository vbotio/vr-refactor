import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MainCardService {
  results: string[];
  constructor(private http : Http) { 
    console.log("1");
    
    http.get('http://www.mocky.io/v2/59dd0c911000004617ccd579').subscribe(data => {
      this.results = data['results'];
    })
  }
}
