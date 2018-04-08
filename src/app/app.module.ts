import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { routing }  from './app.routing';


import { AppComponent } from './app.component';
import {NabvarComponent} from './nabvar/nabvar.component';


@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

