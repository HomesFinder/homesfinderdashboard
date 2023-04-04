import { Component, OnInit,Input, ChangeDetectorRef } from '@angular/core';
import { PropserviceService } from '../propservice.service';
import { CompropData } from './comPropData';

@Component({
  selector: 'app-add-commercial',
  templateUrl: './add-commercial.component.html',
  styleUrls: ['./add-commercial.component.scss']
})
export class AddCommercialComponent implements OnInit {

  @Input() data=new CompropData('','','','','','','','','',[],[],[])
    constructor(public propService:PropserviceService,private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  projectDetails=[
  
      { key: "ageOfProperty", value: 0 },
      { key: "landParcel", value: 0 },
      { key: "landZone", value: "" },
      { key: "noOfTowers", value: 0 },
      { key: "superBuiltupArea", value: 0 },
      { key: "carpetArea", value: 0 },
      { key: "flooring", value: "" },
      { key: "noOfLifts", value: 0 },
      { key: "Washroom", value: "" },
      { key: "waterInlet", value: "" },
      { key: "fireSprinkler", value: "" },
      { key: "centralA_C", value: "" },
      { key: "powerBackup", value: "" }  
  ]
  features=[
    
       { key: "commonPowerBackup", value: false },
       { key: "visitorParking", value: false },
       { key: "commonWashroom", value: false },
       { key: "security", value: false },
       { key: "CCTV", value: false },
       { key: "waterProvision", value: false },
       { key: "maintainanceStaff", value: false },
       { key: "restaurant", value: false },
       { key: "guestLobby_Lounge", value: false }
    
    
  ]

  imagesUri:any[]=[]
  imageToShow: any;
  async imageToShowInput(event: Event){
    // console.log("before", this.dimensionsUris.length);

   
   
   // console.log((event.target as HTMLInputElement).files);
   // this.imageToShow=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,this.propService.currentPropHolder.imageToShow))
    if(this.propService.currentPropHolder==undefined){
    
      console.log('in img to show undefiined'); 
      this.imageToShow=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,[]))
    }
    else if(this.propService.currentPropHolder!=undefined){        console.log('in img to show not undefiined'); 
      console.log(this.propService.currentPropHolder);
      
      this.imageToShow=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,[]))
    }
    this.cd.detectChanges();
      // thi
    
    
    
   // this.data.imagesUri=this.propService.uploadImages((event.target as HTMLInputElement).files)
           
}

async handleFileInput(event: Event){
  console.log("before", this.imagesUri.length);
  
 
 // console.log((event.target as HTMLInputElement).files);
 
console.log(this.propService.currentPropHolder);

 if(this.propService.currentPropHolder==undefined){

    
  this.imagesUri=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,[]))
    
  
}
else if(this.propService.currentPropHolder!=undefined){
  if(this.imagesUri.length==0){
    this.imagesUri=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,[]))
    this.cd.detectChanges();
  }
  else{
    this.imagesUri=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,this.propService.currentPropHolder.imagesUri.length))
    this.cd.detectChanges();
  }
 
}


  // this.imagesUri=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,[]))

  // uris.forEach(uris=>{
  //   this.imagesUri.push(uris)
  // })
  console.log("in images uri",this.imagesUri);
  console.log("after", this.imagesUri.length);
  
  
  
 // this.data.imagesUri=this.propService.uploadImages((event.target as HTMLInputElement).files)
         
}
removeMultipleImages(index:number){
  this.imagesUri.splice(index, 1)
  console.log(this.imagesUri);
  
}

postProp(){
    this.data.projectDetails=this.projectDetails
    this.data.buildingAmenities=this.features
    this.data.imagesURI=this.imagesUri
    this.data.imageToShow=this.imageToShow
    console.log(this.data);
    this.propService.postCommercialProp(this.data)
    
}
editProp(){}
}
