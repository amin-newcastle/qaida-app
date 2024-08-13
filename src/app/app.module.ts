import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ArabicAlphabetComponent } from './arabic-alphabet/arabic-alphabet.component';

@NgModule({
  declarations: [AppComponent, MainComponent, ArabicAlphabetComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
