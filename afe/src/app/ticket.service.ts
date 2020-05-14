import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http'
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

  update(id: string, ticket: Ticket ): Observable<Ticket> {
    
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    // const fd = new FormData
    // fd.append ('name', name)
    
    return this.http.patch(     
      `http://localhost:5000/hd/ticket/upd/${id}`, 
      // fd,
      ticket,
       {headers}
      )
      .pipe(map(res => res.json()))
  }


  fetch(params: any = {}): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(
      'http://localhost:5000/hd/ticket/all', 
       {
      params: new HttpParams({
        fromObject: params
      })
    })
  }
}