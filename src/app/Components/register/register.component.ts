import { Component, OnInit } from '@angular/core';
import {consola,getData} from './service';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public searchValue:String="";
  public searchName:String="";
  
  
  constructor(
  
  ) { 
    
   }

  ngOnInit() {
  }
  addingToTable(valor){
    console.log(valor);
console.log(getData(1))
  setTimeout(()=>{
this.clearSearch()
  },500); 
  }
  clearSearch(){
    this.searchValue = null;
    this.searchName = null;
  }
  codingSearch(e){
    this.searchValue = e.target.value;

    this.addingToTable(this.searchValue)
  }
  nameSearch(e){
    this.searchName = e.target.value;
    this.addingToTable( this.searchName)
  }
}
