import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DriverFormComponent } from './driver-form/driver-form.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import {DriverService} from "./driver.service";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    DriverFormComponent,
    DriverListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
