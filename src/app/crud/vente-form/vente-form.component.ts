import {Component, OnInit} from '@angular/core';
import {CrudService} from "../service/crud.service";

@Component({
  selector: 'app-vente-form',
  standalone: true,
  imports: [],
  templateUrl: './vente-form.component.html',
  styleUrl: './vente-form.component.scss'
})
export class VenteFormComponent implements OnInit{
  constructor(private crudService: CrudService) {
  }
  ngOnInit(): void {
  }

}
