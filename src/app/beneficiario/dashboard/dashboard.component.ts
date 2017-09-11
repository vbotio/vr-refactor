import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menu: Menu = [
    {
      name: 'meus cartões',
      _id: 1
    },
    {
      name: 'consulta rápida',
      _id: 2,
    },
    {
      name: 'desbloquear cartão',
      _id: 3
    }
  ]
  
  constructor() { }

  ngOnInit() {
        
  }
}

export class Menu {
  constructor(
     name: string,
     _id: number
    ) {

  }
}
