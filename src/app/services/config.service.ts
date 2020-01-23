import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { finalize } from 'rxjs/operators';
import { Configuration } from 'src/app/models/configuration';

@Injectable()
export class ConfigService {
  private _config: Configuration;

  constructor(private http: HttpClient) { }

  get config() {
    return this._config;
  }

  public loadConfig(): Promise<Configuration> {
    return this.http
      .get<Configuration>('assets/config.json').pipe(
        finalize(() => {
        })
      )
      .toPromise()
      .then(config => {
        this._config = config;
        return this._config
      });
  }
}
