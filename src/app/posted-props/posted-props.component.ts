import { Component } from '@angular/core';
import { PropserviceService } from '../propservice.service';

@Component({
  selector: 'app-posted-props',
  templateUrl: './posted-props.component.html',
  styleUrls: ['./posted-props.component.scss']
})
export class PostedPropsComponent {
  properties:any
  constructor(public propService:PropserviceService) { }

  ngOnInit(): void {
    this.loadInquries()
  }
  ngOnChange(){
    this.loadInquries()
  }
  loadInquries(){
    this.propService.getAllUserPostedProps().subscribe((data:any)=>{
      this.properties=data
      console.log(this.properties);
      
    })
  }
}
