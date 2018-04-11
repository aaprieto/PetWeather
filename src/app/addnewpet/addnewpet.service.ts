import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AddnewpetService {
  private url = "";
  constructor(private http: HttpClient) { }

  addNewPet(_param:string) : Observable<any>  {
    this.url = '/api/addpet/' + _param;
    return this.http.get(this.url);
  }
  lookForLoc(_lat:string, _lang:string) : Observable<any>  {
    this.url = '/api/lookforloc/' + _lat+","+_lang;
    return this.http.get(this.url);
  }
}
