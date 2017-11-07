import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { MainCardService } from './main-card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  results: string[];
  constructor(private http: Http) { }
  
  ngOnInit(): void {
      this.http.get("http://www.mocky.io/v2/59dd0c911000004617ccd579")
      .map(dados => dados.json())
      .subscribe(dados => console.log(dados));
  }
}
