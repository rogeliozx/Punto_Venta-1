import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
public producto:any;

  constructor() { }

  ngOnInit() {
  }
  emitRegister(event){

    this.producto=event;
  
 


  }

}
