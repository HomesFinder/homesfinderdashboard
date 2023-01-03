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
  constructor(private propService:PropserviceService) {
   
   }
  imagesUri:any[]=[]
  dimensionsUris:any[]=[]
  data=new propData('','','','','','','','','','','','','',0,'',0,'','','',0,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',0,'','','',[],[])
   logoUri:any[]=[]
  ngOnInit(): void {
  
  }
 ngOnChanges(){
  if(this.propService.isEdit){
    this.editProp();
  }
 }
   
  
  postProp(){
    this.propService.isEdit=false
    console.log("in prop");
      this.data.imagesUri=this.imagesUri
      this.data.dimensionMapImages=this.dimensionsUris
      this.data.DeveloperLogo=this.logoUri[0]
      this.propService.postProp(this.data) 
      console.log(this.data);
        
    }
    
    async handleFileInput(event: Event){
        console.log("before", this.imagesUri.length);
        
       
       // console.log((event.target as HTMLInputElement).files);
        this.imagesUri=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,this.propService.currentPropHolder.imagesUri))
       
        // uris.forEach(uris=>{
        //   this.imagesUri.push(uris)
        // })
        console.log("in images uri",this.imagesUri);
        console.log("after", this.imagesUri.length);
        
        
        
       // this.data.imagesUri=this.propService.uploadImages((event.target as HTMLInputElement).files)
               
    }


    async handleDimensionFileInput(event: Event){
      // console.log("before", this.dimensionsUris.length);
      
     
     // console.log((event.target as HTMLInputElement).files);
      this.dimensionsUris=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,this.propService.currentPropHolder.DimensionMapImages))
     
      // uris.forEach(uris=>{
      //   this.imagesUri.push(uris)
      // })
      // console.log("in images uri",this.dimensionsUris);
      // console.log("after", this.dimensionsUris.length);
      
      
      
     // this.data.imagesUri=this.propService.uploadImages((event.target as HTMLInputElement).files)
             
  }

    async handleLogoFileInput(event: Event){
      console.log((event.target as HTMLInputElement).files);
      this.logoUri= <any>await this.propService.uploadImages((event.target as HTMLInputElement).files,[])
      console.log("in logo images uri",this.logoUri);
    }
    editProp(){
      console.log(this.propService.isEdit);
      
      this.data=this.propService.currentPropHolder
      this.imagesUri=this.propService.currentPropHolder.imagesUri
      this.logoUri.push(this.propService.currentPropHolder.DeveloperLogo)
      this.dimensionsUris.push(this.propService.currentPropHolder.dimensionMapImages)
    }


    removeLogoImage(){
        this.logoUri[0]=''
        console.log(this.logoUri);
        
    }
    removeMultipleImages(index:number){
        this.imagesUri.splice(index, 1)
        console.log(this.imagesUri);
        
    }
    removeMultipleDimensionImages(index:number){
      this.dimensionsUris.splice(index, 1)
      console.log(this.dimensionsUris);
      
  }
}
