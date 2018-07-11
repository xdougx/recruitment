import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '@base/services/base.service';

@Injectable()
export class AdvertisersService extends BaseService {

  app = 'vehicle';

  constructor(private http: HttpClient) { super(); }

  public byUser(id: any, params?: any): Observable<any> {
    const url = this.urlFor(`advertisers/by_user/${id}`);
    return this.http.get(url, this.getHeader(params));
  }


}
