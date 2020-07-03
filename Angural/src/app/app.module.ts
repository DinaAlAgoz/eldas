import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BigbodyComponent } from './bigbody/bigbody.component';
import { PagesComponent } from './pages/pages.component';
import { ClentsComponent } from './clents/clents.component';
import { PortoflioComponent } from './portoflio/portoflio.component';
import { OffersComponent } from './offers/offers.component';
import { ThemsComponent } from './thems/thems.component';
import { FotterComponent } from './fotter/fotter.component';
import { NgwWowModule } from 'ngx-wow';



@NgModule({
  declarations: [
    AppComponent,
    BigbodyComponent,
    PagesComponent,
    ClentsComponent,
    PortoflioComponent,
    OffersComponent,
    ThemsComponent,
    FotterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgwWowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
