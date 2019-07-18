import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { OnChanges,AfterContentChecked} from '@angular/core';
/**
 * @title Table with selection
 */
@Component({
  selector: 'data-table',
  styleUrls: ['data-table.component.css'],
  templateUrl: 'data-table.component.html',
})
export class TableSelection implements OnChanges,AfterContentChecked {
 
  @Input() producto: any;
  public total:number;
  private destroy:boolean=false;
  displayedColumns = ['id', 'nombre', 'costo', 'medida', 'select'];
  data = Object.assign(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(this.data);
  selection = new SelectionModel<Element>(true, []);
  constructor(
    
  ) {

  }
  ngOnChanges() {
    if (this.producto) {
      this.AddingToTable(this.producto);
      this.producto=[]; 
      this.CostTotal()
    }
   
  }
  //despues de hacer algo en el dom 
  ngAfterContentChecked() {
    if(this.destroy){
     //aqui se emitiran los datos cuando sufran cambios 

    }
    
  }
  
// se usa cada vez ahi un cambio en el dom del componente
  

  /** Whether the number of selected elements matches the total number of rows. */
  removeAllRows() {
  if(this.data!==[]){
    this.data.splice(0, this.data.length);
    this.dataSource = new MatTableDataSource<Element>(this.data);
  }else{
    alert("Nada que eliminar");
  }
   
  }

  removeSelectedRows(e) {

    let index: number = this.data.findIndex(d => d.id === e);
let minus= this.getCost(this.data[index].costo);
console.log(minus);
    this.data.splice(index, 1);
    this.refresh();
  this.total= this.total-minus;
  this.destroy=true;
  }

  AddingToTable(producto) {
    this.data.push(producto);
    this.refresh();
  }


  refresh() {
    this.dataSource = new MatTableDataSource<Element>(this.data);
  }
  CostTotal(){
  
    let total:number=0;
    
    this.data.map((element , indx ,array)=>{
total=total+this.getCost(element.costo);

    })

   this.total=total;
   console.log(this.total)
  }
  getCost(cost):number{
    let costo:number;
    const pattern:RegExp=/\d+/g;
  costo=parseInt(cost.match(pattern));
 
return costo;
  }
}

export interface Element {
  nombre: string;
  id: number;
  costo: number;
  medida: string;
}

export const ELEMENT_DATA: Element[] = [];


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */