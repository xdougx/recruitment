import { BaseService } from './base.service';
import { Observable } from 'rxjs/Observable';

export abstract class RepositoryService extends BaseService {

  abstract index(params?: any, parentId?: string): Observable<any>;
  abstract show(id: string, parentId?: string): Observable<any>;
  abstract create(params: any, parentId?: string): Observable<any>;
  abstract update(id: string, params: any, parentId?: string): Observable<any>;
  abstract active(id: string, parentId?: string): Observable<any>;
  abstract archive(id: string, parentId?: string): Observable<any>;
  destroy?(id: any, parentId?: string): Observable<any>;

}
