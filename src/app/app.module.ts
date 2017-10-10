import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderService } from './header/header/header.service';
import { FooterService } from './footer/footer/footer.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './beneficiario/dashboard/dashboard.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
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
  providers: [HeaderService, FooterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
