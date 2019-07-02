import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { SellComponent } from "./Components/sell/sell.component";

const appRoutes:Routes=[
    {path:'',component:SellComponent},
    {path:'sell',component:SellComponent}
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);