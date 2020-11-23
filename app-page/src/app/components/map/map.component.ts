import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  texto = 'Wenceslau Braz - Cuidado com as cargas';
  lat = -23.8779431;
  lng = -49.8046873;
  zoom = 15;
  constructor() { }

  ngOnInit() {

  }

}
