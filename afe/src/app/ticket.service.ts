import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http'
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Ticket } from './shared/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http : Http,
    private httpClient: HttpClient,
    ) { }

  addTicket(ticket){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post(
      'http://localhost:5000/hd/ticket/add', 
      ticket,
      {headers}
    )
    .pipe(map(res => res.json()))
    
  } 

  getTickets() {
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.get(
      'http://localhost:5000/hd/ticket/all',     
      {headers}
    )
    .pipe(map(res => res.json()))
    
  }

  update(num: number): Observable<Ticket> {
    console.log('NUMBER IN TICKET SERVICE - '+num);
    
    // let headers = new Headers()
    // headers.append('Content-Type','application/json')
    const fd = new FormData
    fd.append ('num', '42')
    return this.httpClient.patch<Ticket>(     
      'http://localhost:5000/hd/ticket/upd', fd,
      // num,
      // {headers}
      )
  }

}