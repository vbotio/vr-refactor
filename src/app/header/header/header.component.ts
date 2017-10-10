import { HeaderService } from './header.service';
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
  constructor(private headerService: HeaderService) {
    
  }

  ngOnInit() {
    this.menuItems = this.headerService.getMenuItems();
  }

}
