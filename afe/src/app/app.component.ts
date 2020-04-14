import { Component, Input } from '@angular/core';

import { Ticket } from './shared/ticket'
import { tickets } from './shared/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afe';

  // @Input() tickets : Ticket[] = tickets;

}
