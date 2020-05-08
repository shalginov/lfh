import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  ticket: number
  isValid = true

  constructor() { }

  ngOnInit(): void {
  }

  submitFilter(){

  }

}
