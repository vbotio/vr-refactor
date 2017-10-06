import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  menuItems:{}; 
  constructor() {
    this.menuItems = [{
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
      },
      {
        "title": "Download",
        "item": ['teste', 'teste 2']
      }
    ]
   }
    
  ngOnInit() {
  }

}
