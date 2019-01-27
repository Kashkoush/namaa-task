import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: Http) { }

  index(): any {
    return this.http.get(environment.SERVER);
  }

  details(id): any {
    return this.http.get(environment.SERVER + '/' + id);
  }
}
