import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalarieModule } from './salarie/salarie.module';
import { RouterModule } from '@angular/router';
import { SalarieRoutingModule } from './salarie/salarie-routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SalarieModule,
    RouterModule,
    SalarieRoutingModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
