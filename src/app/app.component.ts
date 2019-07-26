import { Component,OnInit  } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public path:boolean;

 constructor(public location: Location) { 
   if(this.location.path()==="") this.path=false;
 else this.path=true;

 }
 ngOnInit(): void {
    
}
  title = 'punto-venta';
  
}
