import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, OnInit,Input, ChangeDetectorRef  } from '@angular/core';
import { flush } from '@angular/core/testing';
import { fail } from 'assert';
import {propData} from '../propform/propData'
import {PropserviceService} from '../propservice.service'

@Component({
  selector: 'app-propform',
  templateUrl: './propform.component.html',
  styleUrls: ['./propform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropformComponent implements OnInit {
  fileToUpload: File | null = null;
  files:FileList | undefined
  @Input() tyopoArray:any[]=[]
  editabletyopoArray:any[]=[]
  constructor(public propService:PropserviceService,private cd: ChangeDetectorRef) {
   
   }
   
   bhk:any
   bhkArea:any
   bhkPrice:any
   neighbour:any
   neighbourArr:any[]=[]
  imagesUri:any[]=[]
  dimensionsUris:any[]=[]
  data=new propData('','','','','','','','','','','','',0,0,0,0,'',0,'','',0,'','','',[],[],[],[],[],[],[],[])
   logoUri:any[]=[]
   amenities=[
    
 
    {
      "key": "Garden",
      "value": false
    },
    {
      "key": "Amphi_Theatre",
      "value": false
    },
    {
      "key": "Kids_Play",
      "value": false
    },
    {
      "key": "Co_WorkSpace",
      "value": false
    },
    {
      "key": "GYM",
      "value": false
    },
    {
      "key": "SeniorCitizenSitout",
      "value": false
    },
    {
      "key": "Club_House",
      "value": false
    },
    {
      "key": "Football_Cricket",
      "value": false
    },
    {
      "key": "Swimming_Pool",
      "value": false
    },
    {
      "key": "Badminton_Squash",
      "value": false
    },
    {
      "key": "Jogging_Track",
      "value": false
    },
    {
      "key": "E_Charging",
      "value": false
    }
  ]
  // @Input()  bhkSpecificObj=[
  //   {
  //     "key": "Carpet_Area",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "Pricing",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "Lobby",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "Living",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "Dining",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "LivTerrace_Balcony",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "Kitchen",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "Dry_Balcony",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "CommonW_c",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "MasterBedroom",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "M_BW_c",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "Terrace_Balcony",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "Guest_Bedroom",
  //     "value1": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   },
  //   {
  //     "key": "G_BW_c",
  //     "value": null,
  //     "value2": null,
  //     "value3": null,
  //     "value4": null
  //   }
  // ]
  propFeatures=[
    {
      "key": "Commercials_in_Project",
      "value": false
    },
    {
      "key": "Gas_Connection",
      "value": false
    },
    {
      "key": "Water_Provision",
      "value": false
    },
    {
      "key": "STP",
      "value": false
    },
    {
      "key": "Earthquake_Resistance",
      "value": false
    },
    {
      "key": "Solar_Water",
      "value": false
    },
    {
      "key": "Water_Harvesting",
      "value": false
    },
  ]
  staircaseList = [
    {
      common: true,
      fireExit: false,
     
    },
  ]

  newBhkSpecific=[
    {
      "key":"carpet",
      value1: [] as string[],
      value2: [] as string[],
      value3: [] as string[],
      value4: [] as string[]
    },
    {
      "key":"pricing",
      value1: [] as string[],
      value2: [] as string[],
      value3: [] as string[],
      value4: [] as string[]
    }
  ]  
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
      this.data.Amenities=this.amenities
      this.data.bhkSpecific=this.tyopoArray
      this.data.propFeatures=this.propFeatures
      this.data.Staircase=this.staircaseList
      this.data.TypologyAvailable=this.tyopoArray
      this.data.AreasNearby=this.neighbourArr
       this.propService.postProp(this.data)
       
      console.log(this.data);
        
    }
    
    async handleFileInput(event: Event){
        console.log("before", this.imagesUri.length);
        
       
       // console.log((event.target as HTMLInputElement).files);
       
      console.log(this.propService.currentPropHolder);
      
       if(this.propService.currentPropHolder==undefined){
      
          
        this.imagesUri=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,[]))
      }
      else if(this.propService.currentPropHolder!=undefined){
        this.imagesUri=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,this.propService.currentPropHolder.imagesUri.length))
      }
 
        // this.imagesUri=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,[]))
   
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
      this.propService.isEdit=true
      console.log(this.propService.isEdit);
      
      this.data=this.propService.currentPropHolder
      console.log('in current',this.propService.currentPropHolder);
      
      this.imagesUri=this.propService.currentPropHolder.imagesUri
      this.logoUri.push(this.propService.currentPropHolder.DeveloperLogo)
     
      this.dimensionsUris=this.propService.currentPropHolder.dimensionMapImages
      this.amenities=this.propService.currentPropHolder.Amenities
      this.editabletyopoArray=this.propService.currentPropHolder.bhkSpecific
      console.log(this.tyopoArray);
      
      this.tyopoArray=this.propService.currentPropHolder.tyopoArray
      this.propFeatures=this.propService.currentPropHolder.propFeatures
      this.staircaseList=this.propService.currentPropHolder.Staircase
      this.tyopoArray=this.propService.currentPropHolder.TypologyAvailable
      this.neighbourArr=this.propService.currentPropHolder.AreasNearby
      this.cd.detectChanges();
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

  
  appendBHK(){
    console.log(this.propService.isEdit);
    
    let bhkTypo={
      bhk:this.bhk,
      bhkPrice:this.bhkPrice,
      bhkArea:this.bhkArea
    }

    if(this.propService.isEdit==false){
    console.log(bhkTypo);
    
    
    console.log(this.tyopoArray);
    
 
   
  }

  else if(this.propService.isEdit==true)
    this.tyopoArray=this.editabletyopoArray
    this.tyopoArray.push(bhkTypo)
  }
  removetypo(ind:number){
    if(this.propService.isEdit==false){
      this.tyopoArray.splice(ind,1)
    }
    else if(this.propService.isEdit==true){
      this.editabletyopoArray.splice(ind,1)
      this.tyopoArray=this.editabletyopoArray
    }
  }
  appendNeighbour(){
    this.neighbourArr.push(this.neighbour)
    this.neighbour=''
  }
  removeNeighbour(ind:number){
    this.neighbourArr.splice(ind,1)
  }



}
