import { Injectable } from '@angular/core';
import { IMobile } from './Mobiles.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  mobiles:IMobile[]=[];

  constructor(private http:HttpClient ) { }

  addMobile(mobile:IMobile){
    this.mobiles.push(mobile);
    console.log(this.mobiles);
  }
  getData():IMobile[]{
    return this.mobiles;
  }
  /**
   *
   * This method is used to delete the record available in the show page
   */
  deleteMobile(id:number){
    return this.mobiles.splice(id,1);

  }
}
