/**
 * Created by Arnold on 2018-04-10.
 */
export class Pet{
  public uuid: string;
  public name: string;
  public type: string;
  public breed: string;
  public location: string;
  public latitude: string;
  public longitude: string;


  constructor(_uuid:string, _name:string, _type:string, _breed:string,  _location:string, _latitude:string, _longitude:string){

    this.uuid = _uuid;
    this.name = _name;
    this.type = _type;
    this.breed = _breed;
    this.location = _location;
    this.latitude = _latitude;
    this.longitude = _longitude;

  }

}


