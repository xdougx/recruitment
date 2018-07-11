import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '@base/services/base.service';
import { Person } from '@base/models/person.model';

@Injectable()
export class CandidatesService {

  constructor(private http: HttpClient) { }

  public load(callback?: () => void): void {
    if (this.isEmpty() === true) {
      this.http.get('assets/resources/candidates.json').subscribe(
        (response: any) => {
          localStorage.setItem('candidates', JSON.stringify(response));
          callback.call(``);
        }
      );
    } else {
      callback.call(``);
    }
  }

  public index(): Array<Person> {
    const candidates = JSON.parse(localStorage.getItem('candidates')) as Array<any>;
    return candidates.map(params => new Person(params)) as Array<Person>;
  }

  public add(params): void {
    const candidates = JSON.parse(localStorage.getItem('candidates')) as Array<any>;
    candidates.push(params);
    localStorage.setItem('candidates', JSON.stringify(candidates));
  }

  public show(id: string): Person {
    const candidates = JSON.parse(localStorage.getItem('candidates')) as Array<any>;
    const result = candidates.find(element => element._id === id);
    if (result) {
      return new Person(result);
    } else {
      throw new Error('Não encontrado');
    }
  }

  private isEmpty(): boolean {
    const candidates = localStorage.getItem('candidates');
    if (candidates === 'undefined') {
      localStorage.clear();
      return true;
    } else {
      return candidates === null;
    }
  }

}
