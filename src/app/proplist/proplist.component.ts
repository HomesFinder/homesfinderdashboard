import { Component, OnInit } from '@angular/core';
import {PropserviceService} from '../propservice.service'

@Component({
  selector: 'app-proplist',
  templateUrl: './proplist.component.html',
  styleUrls: ['./proplist.component.scss']
})
export class ProplistComponent implements OnInit {

  constructor(private propService:PropserviceService) {this.getData() }
  propList:any=[]

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.propService.getPosts()
    .subscribe(response => {
     
      
      this.propList = response;
      console.log(this.propList.data[0]._id);
    });   
  }

}
