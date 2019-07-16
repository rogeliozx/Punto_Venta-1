import { Component,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * @title Table with selection
 */
@Component({
  selector: 'data-table',
  styleUrls: ['data-table.component.css'],
  templateUrl: 'data-table.component.html',
})
export class TableSelection {
  @Input()  producto:any; 
  displayedColumns = ['id', 'nombre', 'costo', 'medida', 'select'];
  data = Object.assign(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(this.data);
  selection = new SelectionModel<Element>(true, []);
  constructor() {

  }
  /** Whether the number of selected elements matches the total number of rows. */
  removeAllRows() {
    console.log(this.data.length);
    this.data.splice(0, this.data.length)
    this.dataSource = new MatTableDataSource<Element>(this.data);

   
  }
  removeSelectedRows(e) {
    
    console.log(this.data);


    let index: number = this.data.findIndex(d => d.id === e);
    
    this.data.splice(index, 1)
    this.refresh();
  }

  getProducto(event){
    console.log(event)
  }
  refresh(){
    
    this.dataSource = new MatTableDataSource<Element>(this.data);
    
  }

}

export interface Element {
  nombre: string;
  id: number;
  costo: number;
  medida: string;
}

export const ELEMENT_DATA: Element[] = [
  { id: 21, nombre: 'Hydrogen', costo: 1.0079, medida: 'H' },
  { id: 2, nombre: 'Helium', costo: 4.0026, medida: 'He' },
  { id: 3, nombre: 'Lithium', costo: 6.941, medida: 'Li' },
  { id: 4, nombre: 'Beryllium', costo: 9.0122, medida: 'Be' },
  { id: 5, nombre: 'Boron', costo: 10.811, medida: 'B' },
  { id: 6, nombre: 'Carbon', costo: 12.0107, medida: 'C' },
  { id: 7, nombre: 'Nitrogen', costo: 14.0067, medida: 'N' },
  { id: 8, nombre: 'Oxygen', costo: 15.9994, medida: 'O' },
  { id: 9, nombre: 'Fluorine', costo: 18.9984, medida: 'F' },
  { id: 10, nombre: 'Neon', costo: 20.1797, medida: 'Ne' },
  { id: 11, nombre: 'Sodium', costo: 22.9897, medida: 'Na' },
  { id: 12, nombre: 'Magnesium', costo: 24.305, medida: 'Mg' },
  { id: 13, nombre: 'Aluminum', costo: 26.9815, medida: 'Al' },
  { id: 14, nombre: 'Silicon', costo: 28.0855, medida: 'Si' },
  { id: 15, nombre: 'Phosphorus', costo: 30.9738, medida: 'P' },
  { id: 16, nombre: 'Sulfur', costo: 32.065, medida: 'S' },
  { id: 17, nombre: 'Chlorine', costo: 35.453, medida: 'Cl' },
  { id: 18, nombre: 'Argon', costo: 39.948, medida: 'Ar' },
   { id: 20, nombre: 'Calcium', costo: 40.078, medida: 'Ca' },

];


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */