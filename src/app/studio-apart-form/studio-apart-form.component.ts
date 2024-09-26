import { Component } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectionStrategy, OnInit,Input, ChangeDetectorRef  } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { flush } from '@angular/core/testing';
import { fail } from 'assert';
import { Observable } from 'rxjs';
import {propData} from '../propform/propData'
import { studiopropdata } from '../propform/studiopropdata';
import {PropserviceService} from '../propservice.service'

@Component({
  selector: 'app-studio-apart-form',
  templateUrl: './studio-apart-form.component.html',
  styleUrls: ['./studio-apart-form.component.scss']
})
export class StudioApartFormComponent {

  fileToUpload: File | null = null;
  files:FileList | undefined
  @Input() tyopoArray:any[]=[]
  editabletyopoArray:any[]=[]
  imageToShow: any;
  isLinear = false;
  propform!:any
  searchParameter:any
  constructor(public propService:PropserviceService,private cd: ChangeDetectorRef ) {}
 
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
  @Input() data=new studiopropdata('','','','','','','','',0,'','','',0,[],[],[],[],'','','',[],0,0,0,0,0,0,'','','','','')
   logoUri:any[]=[]

   amenities=[

    {
      "key": "Club_House",
      "value": false
    },

    {
      "key": "GYM",
      "value": false
    },

    {
      "key": "Library",
      "value": false
    },
    {
      "key": "Cafe",
      "value": false
    },
    {
      "key": "Parking",
      "value": false
    },
    {
      "key": "Air_Conditioner",
      "value": false
    },
    {
      "key": "Cupboard",
      "value": false
    },
    {
      "key": "Study_Table",
      "value": false
    },
    {
      "key": "Bed",
      "value": false
    },   {
      "key": "Fridge",
      "value": false
    },
    {
      "key": "TV",
      "value": false
    },
    {
      "key": "Oven",
      "value": false
    },
    {
      "key": "Wifi",
      "value": false
    },
    {
      "key": "Restaurant",
      "value": false
    },
    
    {
      "key": "DG_Backup",
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
 
  ngOnInit(){
     this.developers$= this.propService.getAllDevelopers()
  }

 ngOnChanges(){
  if(this.propService.isEdit){
    this.editProp();
  }
  
 }


 
  poststudio(){
    this.propService.isEdit=false
    console.log("studio in prop");
      this.data.imagesUri=this.imagesUri
      this.data.imageToShow=this.imageToShow
      this.data.Amenities=this.amenities 
      this.data.AreasNearby=this.neighbourArr
      if(this.data.possessionMonthAndYear==='' ||this.data.possessionMonthAndYear===undefined ){
        this.data.possessionMonthAndYear="2099-01-01"
      }
      console.log(this.data);
       this.propService.postStudioinDB(this.data).subscribe(data => {
      console.log(data);
      console.log("data posted");
      alert("Data Posted")
    })
    }




    
    async handleFileInput(event: Event){
        console.log("before", this.imagesUri.length);
       // console.log((event.target as HTMLInputElement).files);
       
      console.log(this.propService.currentPropHolder);
      
       if(this.propService.currentPropHolder==undefined){
        this.imagesUri=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,[],this.data.ProjectName))
      }

      else if(this.propService.currentPropHolder!=undefined){
        if(this.imagesUri.length==0){
          this.imagesUri=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,[],this.data.ProjectName))
          this.cd.detectChanges();
        }
        else{
          this.imagesUri=(<any>await this.propService.uploadImages((event.target as HTMLInputElement).files,this.propService.currentPropHolder.imagesUri.length,this.data.ProjectName))
          this.cd.detectChanges();
        }
       
      }
    
        console.log("in images uri",this.imagesUri);
        console.log("after", this.imagesUri.length);   
               
    }

    async imageToShowInput(event: Event){
    
      if(this.propService.currentPropHolder==undefined){
        console.log('in img to show undefiined'); 
        this.imageToShow=(<any>await this.propService.uploadDisplayImages((event.target as HTMLInputElement).files,[],this.data.ProjectName))
      }
      else if(this.propService.currentPropHolder!=undefined){      
        console.log('in img to show not undefiined'); 
        console.log(this.propService.currentPropHolder);
        
        this.imageToShow=(<any>await this.propService.uploadDisplayImages((event.target as HTMLInputElement).files,[],this.data.ProjectName))
      }
      this.cd.detectChanges(); 
             
  }

    async handleLogoFileInput(event: Event){
      console.log((event.target as HTMLInputElement).files);
      this.logoUri= <any>await this.propService.uploadImages((event.target as HTMLInputElement).files,[],this.data.ProjectName)
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
      this.cd.detectChanges();

      this.dimensionsUris=this.propService.currentPropHolder.dimensionMapImages
      // this.amenities=this.propService.currentPropHolder.Amenities
      
      for (const amenity of this.propService.currentPropHolder.Amenities) {
        const matchingIndex = this.amenities.findIndex((f) => f.key === amenity.key);
        if (matchingIndex !== -1) {
          this.amenities[matchingIndex].value = amenity.value;
          console.log('replace')
        } else {
          // this.amenities.push({ key: amenity.key, value: amenity.value === "true" });
          // console.log('push')
        }
      }
      // this.amenities=this.propService.currentPropHolder.Amenities
      console.log(this.propService.currentPropHolder.Amenities);
      console.log(this.amenities);
    
      this.imageToShow=this.propService.currentPropHolder.imageToShow
      this.tyopoArray=this.propService.currentPropHolder.tyopoArray
      // this.propFeatures=this.propService.currentPropHolder.propFeatures

      this.tyopoArray=this.propService.currentPropHolder.TypologyAvailable
      this.neighbourArr=this.propService.currentPropHolder.AreasNearby
      this.neighbour=''
      
      this.data.Developer=this.propService.currentPropHolder.Developer._id

      // this.possessionMonthAndYear=this.data.possessionMonthAndYear
      let fetchedDate=this.data.possessionMonthAndYear.toString()
      const date = new Date(fetchedDate);
     this.possessionMonthAndYear = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
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
    removeSingleImages(index:number){
      this.imageToShow.splice(index, 1)
    } 
    async removeImgFromStorage(url: any){
      try {
        await this.propService.deleteImageByUrl(url) ;
      } catch (error) {
        console.log('Error removing files:', error);
        // Handle the error as needed
      }
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

  appendNeighbour(){
    this.neighbourArr.push(this.neighbour)
    this.neighbour=''
  }
  removeNeighbour(ind:number){
    this.neighbourArr.splice(ind,1)
  }

  refresh(){
    location.reload()
  }

}




