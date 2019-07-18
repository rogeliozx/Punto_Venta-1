import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
public producto:any;
public total:number;
  constructor() { }

  ngOnInit() {
  }
  emitRegister(event){
    this.producto=event;
   setTimeout(()=>{ this.producto=null;},100)
  }
  getPrice(event){
    this.total=event;
  }
}
