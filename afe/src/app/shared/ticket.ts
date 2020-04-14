export class Ticket {
    constructor (
    public num: number,
    public title: string,
    public message: string,
    public perf: string = '',
    public date: number = Date.now(),
    public completed: boolean =false) {}
  }