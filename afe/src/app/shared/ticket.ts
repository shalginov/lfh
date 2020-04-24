export class Ticket {
    constructor (
    public num: number,
    public first_name: string,    
    public last_name: string,        
    public tel: string,        
    public title: string,
    public mes: string,
    public perf: string = '',
    public date: string,
    public completed: boolean =false) {}
  }