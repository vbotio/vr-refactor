import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menu = [
    {
      'item': 'meus cartões',
      '_id': 1
    },
    {
      'item': 'consulta rápida',
      '_id': 2,
    },
    {
      'item': 'desbloquear cartão',
      '_id': 3
    }
  ]
  
  constructor() { }

  ngOnInit() {
    for (var i in this.menu) {
      console.log(i.item);
    }
        
  }
}

export class Menu {
  constructor(
    public _id: number,
    public item: integer64
  ) {

  }
}
