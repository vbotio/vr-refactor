import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

  constructor() { }
  
  getMenuItems() {
    return ['empresa', 'estabelecimento', 'você'];
  }
}
