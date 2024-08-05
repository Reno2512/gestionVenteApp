import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  loadVente(){
    const url = environment.API_EndPoint + 'view.php';
    return this.httpClient.get(url).pipe(map(data=>data))
  }
}
