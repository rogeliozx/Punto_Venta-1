import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { SellComponent } from "./Components/sell/sell.component";
import {InventoryComponent} from './Components/Inventory/inventory.component'
const appRoutes:Routes=[
    {path:'',component:SellComponent},
    {path:'sell',component:SellComponent},
    {path:'inventory',component:InventoryComponent}
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);