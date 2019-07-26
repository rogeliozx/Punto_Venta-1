import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public cantidad: boolean;
  public piezas:number=1;
  constructor(
    
  ) {

  }

  ngOnInit() {
    this.cantidad = true;
  }
  getKindProduct(e) {
   
    if (e.value === "true") {
      this.cantidad = true;
    }
    else {
      this.cantidad = false;
    }
    
  }
  onKeydown(value){
  let  valor=value.target.value;
    if(valor!=undefined && valor!=""){
      this.piezas=valor;
      
    }

  }
  increaseValue(){
this.piezas++;
  }
  decreaseValue(){
    this.piezas--;
  }
}
