import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VenteListComponent} from "./vente-list/vente-list.component";
import {VenteFormComponent} from "./vente-form/vente-form.component";

const routes: Routes = [
  {path:'', redirectTo: 'vente-list', pathMatch: 'full'},
  {path: 'vente-list', component: VenteListComponent},
  {path: 'vente-form', component: VenteFormComponent},
  {path: 'update-vente/:venteId', component: VenteFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
