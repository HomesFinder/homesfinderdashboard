import { Component, OnInit } from '@angular/core';
import {propData} from '../propform/propData'
import {PropserviceService} from '../propservice.service'
@Component({
  selector: 'app-propform',
  templateUrl: './propform.component.html',
  styleUrls: ['./propform.component.scss']
})
export class PropformComponent implements OnInit {
  fileToUpload: File | null = null;
  files:FileList | undefined
  constructor(private propService:PropserviceService) { }
  imagesUri:any[]=[]
  data=new propData('','','','','','','','','','',0,'',0,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',0,'','',[])

  ngOnInit(): void {
  }
  postProp(){
    console.log("in prop");
      this.data.imagesUri=this.imagesUri
      // this.propService.postProp(this.data) 
      console.log(this.data);
        
    }
    
    async handleFileInput(event: Event){

        console.log((event.target as HTMLInputElement).files);
        this.imagesUri= <any>await this.propService.uploadImages((event.target as HTMLInputElement).files)
        console.log("in images uri",this.imagesUri);
        
        
       // this.data.imagesUri=this.propService.uploadImages((event.target as HTMLInputElement).files)
               
    }
}
