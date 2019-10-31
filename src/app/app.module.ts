import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockDataArrayComponent } from './mock-data-array/mock-data-array.component';
import { MockDataObjectComponent } from './mock-data-object/mock-data-object.component';

@NgModule({
  declarations: [
    AppComponent,
    MockDataArrayComponent,
    MockDataObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
