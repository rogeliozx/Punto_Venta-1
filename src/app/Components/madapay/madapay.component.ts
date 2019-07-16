import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'madapay',
  templateUrl: './madapay.component.html',
  styleUrls: ['./madapay.component.css']
})
export class MadapayComponent implements OnInit {
//comunicacion padre a hijo y hijo a padre
@Input() modals:boolean; 
@Output() getModal=new EventEmitter();
//animacion al acoplar

  constructor() { }

  ngOnInit() {
    
  }
  modalClose(e){
   
  this.modals=e;
this.getModal.emit(this.modals);
  }
 

}
