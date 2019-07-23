import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatButtonModule, MatCheckboxModule} from '@angular/material';
//Componentes
import { AppComponent } from './app.component';
import { SellComponent } from './Components/sell/sell.component';
//Rutas
import {appRoutingProviders,routing  } from "./app.routing";
import { RegisterComponent } from './Components/register/register.component';
import { PayComponent } from './Components/pay/pay.component';
import { MadapayComponent } from './Components/madapay/madapay.component';
import { TableSelection } from './data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule,MatCheckboxModule } from '@angular/material';
import { InventoryComponent } from './Components/Inventory/inventory.component';
import { TableComponent } from './Components/Inventory/table/table.component';
import { AddProductComponent } from './Components/Inventory/add-product/add-product.component';
@NgModule({
  declarations: [
    AppComponent,
    SellComponent,
    RegisterComponent,
    PayComponent,
    MadapayComponent,
    TableSelection,
    InventoryComponent,
    TableComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule
    
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
