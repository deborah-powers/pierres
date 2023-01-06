import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, PierreDetails } from './app.component';
import { PierresService } from './app.pierres.service';

@NgModule({
  declarations: [
    AppComponent, PierreDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PierresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
