import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockDataArrayComponent } from './mock-data-array/mock-data-array.component';
import { MockDataObjectComponent } from './mock-data-object/mock-data-object.component';
import { ConfigService } from './services/config.service';

export function loadConfig(config: ConfigService) {
  return () => config.loadConfig();
};

@NgModule({
  declarations: [AppComponent, MockDataArrayComponent, MockDataObjectComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ToastrModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    HttpClient,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      multi: true,
      deps: [ConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
