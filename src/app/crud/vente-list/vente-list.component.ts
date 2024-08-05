import {Component, OnInit} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {CrudService} from "../service/crud.service";

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
  rowData: any = [];
  gridOption = {
    rowHeight: 50
  }
  frameworkComponent = {
    customCellRenderer: VenteListComponent
  };

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "v_id", headerName: "Id", sortable:true, headerClass:"header-cell", filter:"AgNumberColumnFilter" },
    { field: "v_montantTotal", headerName: "Montant total", sortable:true, headerClass:"header-cell", filter:"AgNumberColumnFilter" },
    { field: "v_reference", headerName: "reference", sortable:true, headerClass:"header-cell", filter:"agNumberColumnFilter" },
    { field: "date", headerName: "Date", sortable:true, headerClass:"header-cell" },
    { field: "", headerName: "Action", headerClass:"header-cell", width:
      250, cellRenderer: this.actionRender },
  ];

  venteList: any = [];
  venteListSubscribe: any;
  constructor(private crudService:CrudService) {
  }
  ngOnInit(): void {
    this.getVentelist();
  }

  getVentelist(){
    this.venteListSubscribe = this.crudService.loadVente().subscribe(res =>{
      this.venteList = res;
      console.log('res', res);
      this.rowData = res;
    })
  }

  actionRender(params: any){

    let div = document.createElement('div');
    let htmlCode = '<button type="button" class="btn btn-success">View</button>' +
    '<button type="button" class="btn btn-warning">Update</button>' +
    '<button type="button" class="btn btn-danger">Delete</button>'
    div.innerHTML = htmlCode;
    return div;

  }

}
