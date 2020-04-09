import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent implements OnInit {

  constructor(
    private flashMess: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logOutUserClick() {
    this.authService.logOut();
    this.flashMess.show('you are logouted', {cssClass: 'alert-warning', timeout: 1500})
    this.router.navigate(['auth'])
    return false
  }


}
