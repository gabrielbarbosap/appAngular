import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import mock from '../../mockServer/graph.json';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss']
})


export class TableActionsComponent implements OnInit {
  table = mock;
  oldTable = mock;
  proc;
  allAtr;
  allConc;
  allProg;
  allPrev;
  displayedColumns: string[] = ['status', 'desc'];
  dataSource;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor() { }

  ngOnInit() {
    this.allAtr = this.table.filter(res => res.status === 'Atraso').length;
    this.allConc = this.table.filter(res => res.status === 'Concluida').length;
    this.allProg = this.table.filter(res => res.status === 'Andamento').length;
    this.allPrev = this.table.filter(res => res.status === 'Prevista').length;
    this.dataSource = new MatTableDataSource(mock);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  buildTable() {
    this.dataSource = new MatTableDataSource(this.table);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filter(param) {
    console.log('chegou')
    if (param === 'all') {
      this.table = this.oldTable;
    } else {
      this.table = this.oldTable.filter(res => res.status === param);
    }
    this.buildTable();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
