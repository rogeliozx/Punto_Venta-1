import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { SellComponent } from "./Components/sell/sell.component";
import { LoginComponent } from "./Components/login/login.component";
import {InventoryComponent} from './Components/Inventory/inventory.component'
const appRoutes:Routes=[
    {path:'',component:LoginComponent},
    {path:'sell',component:SellComponent},
    {path:'inventory',component:InventoryComponent}
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);