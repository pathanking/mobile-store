import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
import { IMobile } from '../Mobiles.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private mobileService:MobileService,private router:Router) { }

  ngOnInit() {
  }
  /**
   * 
   * @param mobile 
   * This method is used to add the details given by the user and route  the added details to the another component
   */
  addMobile(mobile:IMobile){
    console.log(mobile);
    this.mobileService.addMobile(mobile);
    this.router.navigate(["/show"]);
    
  }

}
