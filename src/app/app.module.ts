import { APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MockDataArrayComponent } from "./mock-data-array/mock-data-array.component";
import { MockDataObjectComponent } from "./mock-data-object/mock-data-object.component";
import { ConfigService } from "./services/config.service";
import { of, Observable, ObservableInput } from '../../node_modules/rxjs';
import { map, catchError } from 'rxjs/operators';

// move this
function load(http: HttpClient, config: ConfigService): () => Promise<boolean> {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolve: (a: boolean) => void): void => {
      http
        .get("./config.json")
        .pipe(
          map((x: ConfigService) => {
            config.mockDataArrayBaseUrl = x.mockDataArrayBaseUrl;
            config.mockDataObjectBaseUrl = x.mockDataObjectBaseUrl;
            resolve(true);
          }),
          catchError(
            (
              x: { status: number },
              caught: Observable<void>
            ): ObservableInput<{}> => {
              if (x.status !== 404) {
                resolve(false);
              }
              config.mockDataArrayBaseUrl = "http://localhost:4201";
              config.mockDataObjectBaseUrl = "http://localhost:4202";
              resolve(true);
              return of({});
            }
          )
        )
        .subscribe();
    });
  };
}

@NgModule({
  declarations: [AppComponent, MockDataArrayComponent, MockDataObjectComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: load,
      multi: true,
      deps: [HttpClient, ConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
