import { Component, OnInit } from '@angular/core';
import mock from '../../mockServer/financial.json';

@Component({
  selector: 'app-title-financial',
  templateUrl: './title-financial.component.html',
  styleUrls: ['./title-financial.component.scss']
})
export class TitleFinancialComponent implements OnInit {

  financial = mock;
  oportunits = mock;
  dead;
  buy;
  open;
  constructor() { }

  ngOnInit() {
    this.dead = this.oportunits.filter(res => res.status === 'Vencido');
    this.buy = this.oportunits.filter(res => res.status === 'Pago');
    this.open = this.oportunits.filter(res => res.status === 'Aberto');
    this.buildTotalOpen();
    this.buildTotalDead();
    this.buildTotalBuy();

  }

  buildTotalBuy() {
    return Number(this.buy.map(t => t.value).reduce((acc, value) => acc + value, 0)).toLocaleString('br');
  }
  buildTotalDead() {
    return Number(this.dead.map(t => t.value).reduce((acc, value) => acc + value, 0)).toLocaleString('br');
  }
  buildTotalOpen() {
    return Number(this.open.map(t => t.value).reduce((acc, value) => acc + value, 0)).toLocaleString('br');
  }

}
