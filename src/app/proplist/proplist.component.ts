import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PropserviceService} from '../propservice.service'

@Component({
  selector: 'app-proplist',
  templateUrl: './proplist.component.html',
  styleUrls: ['./proplist.component.scss']
})
export class ProplistComponent implements OnInit {

  constructor(private propService:PropserviceService, private router:Router) {this.getData() }
  propList:any=[]
  searchParameter:any

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

  

  editData(prop:any){
    this.propService.editProp(prop)
    this.router.navigateByUrl('propform2')
  }

  deleteData(id:any){
    this.propService.deleteDatafromDB(id).subscribe((data:any)=>{
      alert(data.msg)
      this.getData()
    },(err:any)=>{
      alert(err.error.msg)
    })
    this.getData()
  }
}
