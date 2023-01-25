import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { PropserviceService } from '../propservice.service';


@Component({
  selector: 'app-inquries',
  templateUrl: './inquries.component.html',
  styleUrls: ['./inquries.component.scss']
})
export class InquriesComponent implements OnInit {
  Inquries:any=[]
  constructor(public propService:PropserviceService) { }

  ngOnInit(): void {
    this.loadInquries()
  }
  ngOnChange(){
    this.loadInquries()
  }
  loadInquries(){
    this.propService.getAllInquries().subscribe((data)=>{
      this.Inquries=data
      // console.log(this.Inquries);
      
    })
  }
}
