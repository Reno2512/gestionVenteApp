import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import {AgGridModule} from "ag-grid-angular";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CrudRoutingModule,
    AgGridModule
  ]
})
export class CrudModule { }
