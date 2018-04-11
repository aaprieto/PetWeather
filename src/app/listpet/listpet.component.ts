import { Component, OnInit } from '@angular/core';
import { ListpetService } from './listpet.service'
import {Router} from "@angular/router";
import { Pet } from "../model/pet.model";

@Component({
  selector: 'app-listpet',
  templateUrl: './listpet.component.html',
  styleUrls: ['./listpet.component.css'],
  providers: [ListpetService]
})
export class ListpetComponent implements OnInit {
  pets:Pet[] = [];
  constructor(private router: Router,
              private _listpetservice:ListpetService
    ) { }

  ngOnInit() {
    this._listpetservice.listPets()
      .subscribe(
        data => {
          if(data.length > 0) {
                for (let x in data) {
                  let _uid       = data[x]["uid"];
                  let _name      = data[x]["name"];
                  let _type      = data[x]["type"];
                  let _breed     = data[x]["breed"];
                  let _location  = data[x]["location"];
                  let _latitude  = data[x]["latitude"];
                  let _longitude = data[x]["longitude"];
                  this.pets.push(new Pet(_uid, _name,_type, _breed,_location,_latitude, _longitude));
                }
          }  else {
            console.log('There were no results for your search query');
          }
        });
  }
  addNewPet(){
    let link = ['/addnewpet'];
    this.router.navigate(link);
  }
  viewPet(uid:string){
    localStorage.setItem('uid',uid);
    let link = ['/viewpet'];
    this.router.navigate(link);
  }

}
