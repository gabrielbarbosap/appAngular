import { Component, OnInit } from '@angular/core';
import mock from '../../mockServer/user.json';
@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss']
})
export class AboutUserComponent implements OnInit {

  user = mock;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
