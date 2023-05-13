import { Component } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectionStrategy, OnInit,Input, ChangeDetectorRef  } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { flush } from '@angular/core/testing';
import { fail } from 'assert';
import { Observable } from 'rxjs';
import {propData} from '../propform/propData'
import {PropserviceService} from '../propservice.service'
@Component({
  selector: 'app-propform2',
  templateUrl: './propform2.component.html',
  styleUrls: ['./propform2.component.scss']
})
export class Propform2Component {
  fileToUpload: File | null = null;
  files:FileList | undefined
  @Input() tyopoArray:any[]=[]
  editabletyopoArray:any[]=[]
  imageToShow: any;
  isLinear = false;
  propform!:any
  searchParameter:any
  constructor(public propService:PropserviceService,private cd: ChangeDetectorRef) {
   
   }
   
   bhk:any
   bhkArea:any
   bhkPrice:any
   neighbour:any
   neighbourArr:any[]=[]
  imagesUri:any[]=[]
  developers$!: Observable<any>;
  dimensionsUris:any[]=[]
  dummyDate=new Date()
  possessionMonthAndYear:any
  @Input() data=new propData('','','','','','','','','','','','','','','','','',0,0,0,0,'',0,'',0,'','','',[],[],[],[],[],[],[],[],[])
   logoUri:any[]=[]
   amenities=[
    
 
    {
      "key": "Garden",
      "value": false
    },
    {
      "key": "Club_House",
      "value": false
    },
    {
      "key": "GYM",
      "value": false
    },
    {
      "key": "Swimming_Pool",
      "value": false
    },
    {
      "key": "Multi_Purpose_Play_Court",
      "value": false
    }, 
    {
      "key": "Pool_Side_Deck",
      "value": false
    },
    {
      "key": "Senior_Citizen_Sitout",
      "value": false
    },
    {
      "key": "Home_Automation",
      "value": false
    },
    {
      "key": "Gazebo",
      "value": false
    },
    {
      "key": "Kids_Play_Area",
      "value": false
    },
    {
      "key": "Indoor_Kidsplay",
      "value": false
    },
    {
      "key": "Party_Lawn",
      "value": false
    },
    {
      "key": "Multi_Purpose_Hall",
      "value": false
    },
    {
      "key": "Amphi_Theatre",
      "value": false
    },
    {
      "key": "Co_WorkSpace",
      "value": false
    },
    {
      "key": "Box_Cricket_Pitch",
      "value": false
    },
    {
      "key": "Yoga_Zone",
      "value": false
    },
    {
      "key": "Library",
      "value": false
    },
    {
      "key": "Jogging_Track",
      "value": false
    },
    {
      "key": "Creche",
      "value": false
    },
    {
      "key": "Sky_Walk",
      "value": false
    },
    {
      "key": "Barbeque_Zone",
      "value": false
    },
    {
      "key": "Football_Court",
      "value": false
    },
    {
      "key": "Tennis_Court",
      "value": false
    },   {
      "key": "Squash_Court",
      "value": false
    },
    {
      "key": "Badminton_Court ",
      "value": false
    },
    {
      "key": "BasketBall_Court",
      "value": false
    },
    {
      "key": "E_Charging",
      "value": false
    },
    {
      "key": "Spa",
      "value": false
    },
    
    {
      "key": "Jacuzzi",
      "value": false
    },
    {
      "key": "Bar_Area",
      "value": false
    },
    {
      "key": "Outdoor_Cinema",
      "value": false
    },
    {
      "key": "Skating_Ring",
      "value": false
    },
    
    {
      "key": "Star_Gazing_Deck",
      "value": false
    },
    

    {
      "key": "Guest_Suites",
      "value": false
    },
    

    {
      "key": "Cloud_Kitchen",
      "value": false
    },
    

    {
      "key": "24x7_Clinic",
      "value": false
    },
    

    {
      "key": "Beauty_Salon",
      "value": false
    },
    

    {
      "key": "Acupressure_Park",
      "value": false
    },
    {
      "key": "Musical_Garden",
      "value": false
    },
 
    
  ]
  @Input()  bhkSpecificObj=[
    {
      "key": "BHK",
      "valueN":Number
    },
    {
      "key": "Carpet_Area",
      "valueN":''
    },
    {
      "key": "Pricing",
      "valueN":Number
    },
    {
      "key": "noOfBedrooms",
      "valueN":Number
    },
    
    {
      "key": "noOfBalcony",
      "valueN":Number
    },
    {
      "key": "noOfBathrooms",
      "valueN":Number
    },
    
  
  ]
  @Input() allBHK:any[]=[]
  propFeatures=[
    {
      "key": "Commercials_in_Project",
      "value": false
    },
    {
      "key": "Fire_Alarm",
      "value": false
    },
    {
      "key": "Internet_WiFi",
      "value": false
    },
    {
      "key": "Maintainance_Staff",
      "value": false
    },
    {
      "key": "Water_Storage",
      "value": false
    },
    {
      "key": "Waste_Disposal",
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
      "key": "Piped_Gas",
      "value": false
    },
    {
      "key": "Feng_Shui_Vaastu_Compliant",
      "value": false
    },
    {
      "key": "Intercom",
      "value": false
    },
    {
      "key": "Security_Person",
      "value": false
    },
    {
      "key": "Pet_Friendly",
      "value": false
    },
    {
      "key": "Security_Cameras",
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
  Flat_Floor = [
    {
      min: 0,
      max: 0,
     
    },
  ]
  // newBhkSpecific=[
  //   {
  //     "key":"carpet",
  //     value1: [] as string[],
  //     value2: [] as string[],
  //     value3: [] as string[],
  //     value4: [] as string[]
  //   },
  //   {
  //     "key":"pricing",
  //     value1: [] as string[],
  //     value2: [] as string[],
  //     value3: [] as string[],
  //     value4: [] as string[]
  //   }
  // ]  
  ngOnInit(){
     this.developers$= this.propService.getAllDevelopers()
  }
 ngOnChanges(){
  if(this.propService.isEdit){
    this.editProp();
  }
  
 }
   
  
  postProp(){
    this.propService.isEdit=false
    console.log("in prop");
    // const keysToTypecast = ["BHK","Pricing", "noOfBedrooms", "noOfBalcony", "noOfBathrooms"];

    // for (let i = 0; i < this.bhkSpecificObj.length; i++) {
    //   if (keysToTypecast.includes(this.bhkSpecificObj[i].key)) {
    //     this.bhkSpecificObj[i].valueN = Number(this.bhkSpecificObj[i].valueN);
    //   }
    // }
      console.log(this.bhkSpecificObj);
      
      this.data.imagesUri=this.imagesUri
      this.data.imageToShow=this.imageToShow
      this.data.Amenities=this.amenities
      this.data.bhkSpecific=this.allBHK
      this.data.propFeatures=this.propFeatures
      this.data.Staircase=this.staircaseList
      this.data.TypologyAvailable=this.tyopoArray
      this.data.AreasNearby=this.neighbourArr
      this.data.Flat_Floor=this.Flat_Floor
      // this.data.possessionMonthAndYear=this.possessionMonthAndYear

      if(this.data.possessionMonthAndYear==='' ||this.data.possessionMonthAndYear===undefined ){
        this.data.possessionMonthAndYear="2099-01-01"
      }
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
      
      this.data.aboutProperty=this.propService.currentPropHolder.aboutProperty
      console.log(this.data.aboutProperty);
      
      this.data.DeveloperBriefDetails=this.propService.currentPropHolder.DeveloperBriefDetails
      this.data.reraNo=this.propService.currentPropHolder.reraNo
      this.data.buildFacing=this.propService.currentPropHolder.buildFacing
      this.data.constructionType=this.propService.currentPropHolder.constructionType
      
      this.cd.detectChanges();

      this.dimensionsUris=this.propService.currentPropHolder.dimensionMapImages
      // this.amenities=this.propService.currentPropHolder.Amenities
      
      for (const amenity of this.propService.currentPropHolder.Amenities) {
        const matchingIndex = this.amenities.findIndex((f) => f.key === amenity.key);
        if (matchingIndex !== -1) {
          this.amenities[matchingIndex].value = amenity.value === "true";
        } else {
          this.amenities.push({ key: amenity.key, value: amenity.value === "true" });
        }
      }
      this.amenities=this.propService.currentPropHolder.Amenities
      console.log(this.propService.currentPropHolder.Amenities,this.amenities);


      this.allBHK=this.propService.currentPropHolder.bhkSpecific
    
      this.imageToShow=this.propService.currentPropHolder.imageToShow
      this.tyopoArray=this.propService.currentPropHolder.tyopoArray
      // this.propFeatures=this.propService.currentPropHolder.propFeatures

      for (const feature of this.propService.currentPropHolder.propFeatures) {
        const matchingIndex = this.propFeatures.findIndex((f) => f.key === feature.key);
        if (matchingIndex !== -1) {
          this.propFeatures[matchingIndex].value = feature.value;
        } else {
          this.propFeatures.push({ key: feature.key, value: false });
        }
      }
      
     
      
    



      this.staircaseList=this.propService.currentPropHolder.Staircase
      this.tyopoArray=this.propService.currentPropHolder.TypologyAvailable
      this.neighbourArr=this.propService.currentPropHolder.AreasNearby
      this.neighbour=''
      this.data.DGBackup=this.propService.currentPropHolder.DGBackup
      this.data.Developer=this.propService.currentPropHolder.Developer._id

      // this.possessionMonthAndYear=this.data.possessionMonthAndYear
      let fetchedDate=this.data.possessionMonthAndYear.toString()
      const date = new Date(fetchedDate);
     this.possessionMonthAndYear = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;



      this.Flat_Floor[0].min=this.propService.currentPropHolder.Flat_Floor[0].min
      this.Flat_Floor[0].max=this.propService.currentPropHolder.Flat_Floor[0].max


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
      this.allBHK.splice(ind,1)
    }
    else if(this.propService.isEdit==true){
      this.allBHK.splice(ind,1)
     
    }
  }
  appendNeighbour(){
    this.neighbourArr.push(this.neighbour)
    this.neighbour=''
  }
  removeNeighbour(ind:number){
    this.neighbourArr.splice(ind,1)
  }

  
  appendInividualBHK(){
 
    


    if(this.propService.isEdit==false){
      let newData = JSON.parse(JSON.stringify(this.bhkSpecificObj))
      this.allBHK.push(newData);
       console.log(this.allBHK);   
   }
   else if(this.propService.isEdit==true){
    let newData = JSON.parse(JSON.stringify(this.bhkSpecificObj))
    this.allBHK.push(newData);
   }

  }
  refresh(){
    location.reload()
  }

}



