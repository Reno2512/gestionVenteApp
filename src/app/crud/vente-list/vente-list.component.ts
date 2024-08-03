import {Component, OnInit} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";

@Component({
  selector: 'app-vente-list',
  standalone: true,
  imports: [
    AgGridAngular
  ],
  templateUrl: './vente-list.component.html',
  styleUrl: './vente-list.component.scss'
})
export class VenteListComponent implements OnInit{
  // Row Data: The data to be displayed.
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];
  frameworkComponent = {
    customCellRenderer: VenteListComponent
  };

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];
  constructor() {
  }
  ngOnInit(): void {
  }

}
