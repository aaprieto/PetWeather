import { Component, OnInit } from '@angular/core';
import { Pet }    from './pet';
import { AddnewpetService } from './addnewpet.service'
import {Router} from "@angular/router";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-addnewpet',
  templateUrl: './addnewpet.component.html',
  styleUrls: ['./addnewpet.component.css']
})
export class AddnewpetComponent implements OnInit {
  types = ['Dog', 'Cat','Fish'];
  model = new Pet('', '', '', '','','');
  dog_breeds = ["German Shepperd", "Pug","Beagle","Pointer","Husky","Poodle"];
  cat_breeds = ["Spynhx", "Bolinese"];
  fish_breeds = ["Fish Balls", "Gold Fish"];
  breeds = [];
  arrayArg = [];
//  b7ca4f48dba24ab8926c3fd81d3881f3
//

  constructor( private router:Router,
              private addnewpetservice:AddnewpetService) { }

  ngOnInit() {
  }

  changeType(_type){
    if (_type == "Dog"){
      this.breeds = [];
      this.breeds = this.dog_breeds;
    }
    if (_type == "Cat"){
      this.breeds = [];
      this.breeds = this.cat_breeds;
    }
    if (_type == "Fish"){
      this.breeds = [];
      this.breeds = this.fish_breeds;
    }
  }

  onSubmit(name, type, breed, location, latitude, longitude){

    if(name.length < 1){
      alert("Enter Name");
      return;
    }
    if(type.length < 1){
      alert("Select Type");
      return;
    }
    if(breed.length < 1){
      alert("Select Breed");
      return;
    }
    if(latitude.length < 1){
      alert("Enter latitude");
      return;
    }
    if(longitude.length < 1){
      alert("Enter longitude");
      return;
    }

    if(location.length < 1){
      alert("Enter location");
      return;
    }
    if(location == "Please check Latitude and Longitude"){
      alert("Please check Latitude and Longitude");
      return;
    }



    this.arrayArg= [];
    var newObj = new Object();
    newObj["name"] = name;
    newObj["type"] = type;
    newObj["breed"] = breed;
    newObj["location"] = location;
    newObj["latitude"] = latitude;
    newObj["longitude"] = longitude;
    this.arrayArg.push(newObj);
    var json = this.arrayArg.reduce((json, value, key) => { json[key] = value; return json; }, {});
    var myJsonString = JSON.stringify(json);


    this.addnewpetservice.addNewPet(myJsonString)
      .subscribe(
        data => {
          let link = ['/'];
          this.router.navigate(link);
        });
  }
  cancelSubmit(){
    let link = ['/'];
    this.router.navigate(link);
  }
  lookForLocation(lat, lang){
    this.addnewpetservice.lookForLoc(lat,lang)
      .subscribe(
        data => {

          if (data.results.length < 1){
            this.model.location =  "Please check Latitude and Longitude";
          } else {
            this.model.location = data["results"][0]["formatted"];
          }
        });
  }

}
