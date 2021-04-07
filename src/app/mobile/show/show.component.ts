import { Component, OnInit } from '@angular/core';
import { IMobile } from '../Mobiles.interface';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  mobiles:IMobile[];
  constructor(private mobileService:MobileService) { }

  ngOnInit() {
    this.mobiles=this.mobileService.getData();
  }
  /**
   * 
   * This method is used to delete the data
   */
  onClick(id:number){
    this.mobileService.deleteMobile(id);
   
  }
}
