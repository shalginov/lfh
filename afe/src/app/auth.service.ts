import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : Http) { }

  regUser(user){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post(
      'http://localhost:5000/hd/auth/reg', 
      user,
      {headers}
    )
    .pipe(map(res => res.json()))
    
  }

}
