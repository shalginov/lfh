import { Component, Output, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Filter } from '../shared/interfaces';
import { MaterialService, MaterialDatepicker } from '../shared/material.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnDestroy, AfterViewInit {

@Output() onFilter = new EventEmitter<Filter>()
@Output() onClearFilter = new EventEmitter()
@ViewChild ('start') startRef: ElementRef
@ViewChild ('end') endRef: ElementRef

  
  ticket: number
  isValid = true
  start: MaterialDatepicker
  end: MaterialDatepicker

  constructor() { }

  ngAfterViewInit(): void {
    this.start =MaterialService.initDatepicker(this.startRef, this.validate.bind(this))
    this.end =MaterialService.initDatepicker(this.endRef, this.validate.bind(this))
  }
  ngOnDestroy(): void {
    this.start.destroy()
    this.end.destroy()
  }

 
  validate(){
    if (!this.start.date || !this.end.date ) {      
      this.isValid = true
      return
    }    

    this.isValid = this.start.date < this.end.date
  }

  submitFilter(){
    const filter: Filter = {}

    if(this.ticket) {
      filter.ticket = this.ticket
    }
    
    if(this.start.date){
      filter.start = this.start.date
    }

    if(this.end.date){
      filter.end = this.end.date
    }

    this.onFilter.emit(filter)
  }
  
  clearFilter(){
    this.onClearFilter.emit()
  }

}
