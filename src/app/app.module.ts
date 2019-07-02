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
import { TableComponent } from './Components/table/table.component';
import { PayComponent } from './Components/pay/pay.component';
import { MadapayComponent } from './Components/madapay/madapay.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    SellComponent,
    RegisterComponent,
    TableComponent,
    PayComponent,
    MadapayComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
