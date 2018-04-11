import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { routing } from "./app.routing";
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ListpetComponent } from './listpet/listpet.component';
import { AddnewpetComponent } from './addnewpet/addnewpet.component';

import { AddnewpetService } from './addnewpet/addnewpet.service'
import { ListpetService } from "./listpet/listpet.service";
import { ViewpetComponent } from './viewpet/viewpet.component';
import { ViewpetService } from './viewpet/viewpet.service';

@NgModule({
  declarations: [
    AppComponent,
    ListpetComponent,
    AddnewpetComponent,
    ViewpetComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AddnewpetService,
    ListpetService,
    ViewpetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
