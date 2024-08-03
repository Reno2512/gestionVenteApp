import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', redirectTo: 'crud', pathMatch: 'full'},
  {path:'crud', loadChildren: ()=>import('./crud/crud.module').then(m => m.CrudModule)},
];
