import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './mis-comp/toolbar/toolbar.component';
import { ResourceComponent } from './mis-comp/resource/resource.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ResourceComponent
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
