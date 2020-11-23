import { Component, OnInit } from '@angular/core';
import mock from '../../mockServer/credit.json';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {

  credit = mock;
  constructor() { }

  ngOnInit() {
  }

}
