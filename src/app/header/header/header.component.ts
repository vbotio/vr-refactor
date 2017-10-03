import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: string[];
  subMenu:boolean = false;
  
  showSubMenu() {
    this.subMenu = !this.subMenu;
  }
  constructor() {
    this.menuItems = ['empresa', 'estabelecimento', 'você'];
  }

  ngOnInit() {
    
  }

}
