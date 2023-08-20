import { Component, OnInit } from '@angular/core';
import {PropserviceService} from '../propservice.service'
@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {
  logoUri: any="";
  name: string=''
  rating: number=1
  testimony:string=''
  constructor(private propService:PropserviceService) { }

  ngOnInit(): void {
  }

  async handleLogoFileInput(event: Event){
    console.log((event.target as HTMLInputElement).files);
    // this.logoUri= <any>await this.propService.uploadImages((event.target as HTMLInputElement).files,[])
    console.log("in logo images uri",this.logoUri);
  }
  postData(){
    let normalizedTestimony={
      "testimonialName":this.name,
      "testimonialImage":this.logoUri ,
      "rating": this.rating,
      "testimony":this.testimony

    }
    this.propService.postTestimony(normalizedTestimony)
  }
}
