import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ListpetService {
  private url = "";

  constructor(private http: HttpClient) { }

  listPets() : Observable<any>  {
    this.url = '/api/listpets';
    return this.http.get(this.url);
  }

}
