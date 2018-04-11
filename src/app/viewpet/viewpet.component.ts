import { Component, OnInit } from '@angular/core';
import { ViewpetService } from './viewpet.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-viewpet',
  templateUrl: './viewpet.component.html',
  styleUrls: ['./viewpet.component.css'],
  providers: [ViewpetService]
})
export class ViewpetComponent implements OnInit {


  name = "";
  location = "";
  icon = "";
  answer = "";
  image_source = "";
  going = "";
  summary_description = "";
  constructor( private _viewpetservice:ViewpetService,
               private router: Router,) { }
  requires_umbrella = ["rain"];

  ngOnInit() {
    var uid = localStorage.getItem("uid");
    this._viewpetservice.viewPet(uid)
      .subscribe(
        data => {
          let _uid       = data[0]["uid"];
          let _name      = data[0]["name"];
          let _type      = data[0]["type"];
          let _breed     = data[0]["breed"];
          let _location  = data[0]["location"];
          let _latitude  = data[0]["latitude"];
          let _longitude = data[0]["longitude"];
          this.reqHttp(_uid, _name,_type,_breed, _location, _latitude,_longitude);
        });
  }
  lookup(){
    let link = ['/'];
    this.router.navigate(link);
  }

  reqHttp(_uid, _name,_type,_breed, _location, _latitude,_longitude){
    this.name = _name;
    this.location = _location;
    this._viewpetservice.callDarkSkyForecast(_latitude,_longitude)
      .subscribe(
        data => {

          this.answer = "Nope!"
          this.going = "not going ";
          this.summary_description = data.currently.summary;
          if (data.currently.icon == "clear-day"){
            this.image_source = "../../assets/clear-day.png"
          }
          if (data.currently.icon == "clear-night"){
            this.image_source = "../../assets/clear-night.png"
          }
          if (data.currently.icon == "partly-cloudy-day"){
            this.image_source = "../../assets/partly-coudy-day.png"
          }
          if (data.currently.icon == "partly-cloudy-night"){
            this.image_source = "../../assets/partly-coudy-night.png"
          }
          if (data.currently.icon == "cloudy"){
            this.image_source = "../../assets/cloudy.png"
          }
          if (data.currently.icon == "rain"){
            this.image_source = "../../assets/rain.png"
            this.answer = "Yup!"
            this.going = "going ";
          }
          if (data.currently.icon == "sleet"){
            this.image_source = "../../assets/sleet.png"
          }
          if (data.currently.icon == "snow"){
            this.image_source = "../../assets/snow.png"
          }
          if (data.currently.icon == "wind"){
            this.image_source = "../../assets/wind.png"
          }
          if (data.currently.icon == "fog"){
            this.image_source = "../../assets/fog.png"
          }
        });
  }
}
