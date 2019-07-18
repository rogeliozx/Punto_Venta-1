import { Component, OnInit,Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
 
} from '@angular/animations';

@Component({
  selector: 'pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
  animations:[
    trigger('flyInout',[
      transition('void=>*',[ 
        style({transform:'scale(0.5,1)'}),
        animate('0.2s'),
        transition('*=>*',[
          animate('0.4s',style({transform:'scale(1,0.5)'}))
        ])
      ])
    ])
  ]
})
export class PayComponent implements OnInit {
public modal:boolean;
@Input() total:number;

  constructor() {
    this.modal=false;
   }

  ngOnInit() {
  }
setModal(valor){
this.modal=valor;
}
getClose(event){
 
 setTimeout(()=>{
  this.modal=event;
 },200) 
}
}
