import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';


@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  	console.log('thingy');
  	this.authService.handleLoginCallback();
  }

}
