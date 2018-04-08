import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }  from './app.routing';


import { AppComponent } from './app.component';
import {NabvarComponent} from './nabvar/nabvar.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ LoginService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

