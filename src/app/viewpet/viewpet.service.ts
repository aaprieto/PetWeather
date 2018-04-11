import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ViewpetService {
  private url = "";


  constructor(private http: HttpClient) { }

  viewPet(uid) : Observable<any>  {
    this.url = '/api/viewpet/'+ uid;
    return this.http.get(this.url);
  }

  callDarkSkyForecast( _latitude,_longitude) : Observable<any>  {
    //this.url = this.darkSkyEndpoint+this.secret_key+ "/" + _latitude +","+_longitude;
    this.url = '/api/darksky'+ "/" + _latitude +","+_longitude;
    return this.http.get(this.url);
  }

}
