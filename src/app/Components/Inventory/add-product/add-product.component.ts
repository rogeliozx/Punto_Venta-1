import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public cantidad: boolean;
  constructor() {

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
}
