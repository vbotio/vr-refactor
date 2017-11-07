import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DashboardComponent } from './dashboard.component';
import { MainCardService } from './main-card.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [MainCardService]
})
export class DashboardModule { 
  
}
