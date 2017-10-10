import { Injectable } from '@angular/core';

@Injectable()
export class FooterService {

  constructor() { }
  getMenuItems() {
    return [{
      "title": "Produtos",
      "item": ['Conheça os produtos', 'Solicitar Proposta', 'Efetuar Login']
      },
      {
        "title": "Empresa",
        "item": ['História', 'Fale conosco', 'Trabalhe na VR']
      },
      {
        "title": "Aprenda",
        "item": ['FAQ', 'Vídeos', 'Experimente']
      }
    ]
  }
}
