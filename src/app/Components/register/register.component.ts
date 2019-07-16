import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { consola, getData } from './service';
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
  async addingToTable(valor) {
    console.log(valor);
    let result = await getData(1);

    this.productos = result;
    this.emitir()
    setTimeout(() => {
      this.productos={};
      this.clearSearch()
    }, 500);
  }
  clearSearch() {
    this.searchValue = null;
    this.searchName = null;
  }
  codingSearch(e) {
    this.searchValue = e.target.value;

    this.addingToTable(this.searchValue)
  }
  nameSearch(e) {
    this.searchName = e.target.value;
    this.addingToTable(this.searchName)
  }
  emitir() {
   
    this.getProductos.emit(this.productos);
  }
}
