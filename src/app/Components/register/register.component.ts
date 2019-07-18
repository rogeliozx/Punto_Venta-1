import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { consola, getDataById,getDataByName } from './service';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() getProductos = new EventEmitter;
  public searchValue: String = "";
  public searchName: String = "";
  public productos: any;

  constructor(

  ) {


  }

  ngOnInit() {
  }
  async addingToTable(valor,searchBy) {
   
    let result;
   if(searchBy===1){
      result = await getDataById(parseInt(valor))
    }else if(searchBy===2){
      result = await getDataByName(valor)
    }
 
    this.productos = result;
    this.emitir()
      setTimeout(() => {
      this.productos={};
      this.clearSearch()
     }, 300);
  }

  clearSearch() {
    this.searchValue = null;
    this.searchName = null;
  }

  codingSearch(event) {
    this.searchValue = event.target.value;

    this.addingToTable(this.searchValue,1)
  }

  nameSearch(event) {
    this.searchName = event.target.value;
    this.addingToTable(this.searchName,2)
  }

  emitir() {
   
    this.getProductos.emit(this.productos);
  }
}
