import { Component, OnInit } from '@angular/core';
import mock from '../../mockServer/oportunits.json';

@Component({
  selector: 'app-oportunits',
  templateUrl: './oportunits.component.html',
  styleUrls: ['./oportunits.component.scss']
})
export class OportunitsComponent implements OnInit {

  oportunits = mock;
  won;
  loose;
  desc;
  open;
  constructor() { }

  ngOnInit() {
    this.loose = this.oportunits.filter(res => res.status === 'Perdida');
    this.won = this.oportunits.filter(res => res.status === 'Ganha');
    this.open = this.oportunits.filter(res => res.status === 'Aberta');
    this.desc = this.oportunits.filter(res => res.status === 'Descartadas');
    this.buildTotalDesc();
    this.buildTotalOpen();
    this.buildTotalLoose();
    this.buildTotalWon();

  }

  buildTotalWon() {
    return Number(this.won.map(t => t.value).reduce((acc, value) => acc + value, 0)).toLocaleString('br');
  }
  buildTotalLoose() {
    return Number(this.loose.map(t => t.value).reduce((acc, value) => acc + value, 0)).toLocaleString('br');
  }
  buildTotalDesc() {
    return Number(this.desc.map(t => t.value).reduce((acc, value) => acc + value, 0)).toLocaleString('br');
  }
  buildTotalOpen() {
    return Number(this.open.map(t => t.value).reduce((acc, value) => acc + value, 0)).toLocaleString('br');
  }

}
