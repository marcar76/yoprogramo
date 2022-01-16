import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
 import { AppComponent } from './app.component';
import { EmployeeComponent } from './models/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    // FormControl, 
  //FormGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
