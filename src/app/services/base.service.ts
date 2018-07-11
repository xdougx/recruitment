import { UrlHelper } from './url-helper';
import { Globals } from '../app.globals';

import { HttpHeaders } from '@angular/common/http';

export abstract class BaseService {
  abstract app: string;
  private globals = Globals;


  getHeader(params?: any): any {
    const head = { observe: 'response', headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Device-Type': 'Web'
      })
    };
    if (params) { head['params'] = params; }
    return head;
  }

  urlFor(path): string {
    return UrlHelper.urlFor(this.app, path);
  }

}
