import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './beneficiario/dashboard/dashboard.component';
import { HeaderComponent } from './header/header/header.component'


@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'beneficiario/dashboard',
        component: DashboardComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
