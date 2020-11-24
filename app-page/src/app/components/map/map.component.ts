import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import mock from '../../mockServer/graph.json';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  grph = mock;
  proc;
  constructor() { }

  ngOnInit() {
    const allAtr = this.grph.filter(res => res.status === 'Atraso').length;
    const allConc = this.grph.filter(res => res.status === 'Concluida').length;
    const allProg = this.grph.filter(res => res.status === 'Andamento').length;
    const allPrev = this.grph.filter(res => res.status === 'Prevista').length;

    if (allAtr > allConc) {
      this.proc = 'Procastinando';
    } else {
      this.proc = 'Bom';
    }

    const myChart = new Chart('myChart', {
      type: 'pie',
      data: {
        labels: ['Atraso', 'Prevista', 'Concluida', 'Em Andamento'],
        datasets: [{
          data: [allAtr, allPrev, allConc, allProg],
          backgroundColor: [
            'red', '#dec757', 'green', 'blue'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
