import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropserviceService } from '../propservice.service';
import { NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-bhk-specific',
  templateUrl: './bhk-specific.component.html',
  styleUrls: ['./bhk-specific.component.scss']
})
export class BhkSpecificComponent implements OnInit {

  propertyForm!: FormGroup;
  propList:any[]=[]
  selectedProjectLocation:any="Not Selected"
  variantList:any[]=[]
  variantNo:Number=0
  constructor(private fb: FormBuilder,public propService:PropserviceService) { 
      this.propService.getPosts().subscribe((data:any)=>{
        console.log(data);
        this.propList=data.data
        this.propList=this.propList.sort((a, b) => {
          if (a.ProjectName < b.ProjectName) {
            return -1;
          } else if (a.ProjectName > b.ProjectName) {
            return 1;
          } else {
            return 0;
          }
        });
        
        
        
      },(err:any)=>{console.log(err)});
      }

  

  ngOnInit(): void {
    this.propertyForm = this.fb.group({
      tempHolder:[''],
      PropertyID: ['', Validators.required],
      BHK: ['', Validators.required],
      Carpet_Area: ['', Validators.required],
      Pricing: ['', Validators.required],
      noOfBedrooms: ['', Validators.required],
      noOfBalcony: ['', Validators.required],
      noOfBathrooms: ['', Validators.required],
      ProjectLocation:['']
    });
  }

  onSubmit() {
    console.log(this.propertyForm.value);
  
    
    if (this.propertyForm.value.tempHolder) {
      const tempHolderValue = this.propertyForm.value.tempHolder;
      if (tempHolderValue) {
        this.propertyForm.value.PropertyID = tempHolderValue.id;
        this.propertyForm.value.ProjectLocation = tempHolderValue.locationName;
      }
    }
   
    // this.propertyForm.value.ProjectLocation=this.selectedProjectLocation
    this.propService.postBHKVariant(this.propertyForm.value).subscribe((data:any) => {
    
      console.log("Variant Posted Successfully",data);
      alert(data.msg)
      this.getBHKVariants()
    },(err)=>{
      console.log("Variant not posted ",err);
      alert("Error Occured")
    });
    // Do something with the new property data (e.g. save it to a database)
  }

  getBHKVariants(){
        const tempHolderValue = this.propertyForm.value.tempHolder;
        this.selectedProjectLocation=this.propertyForm.value.tempHolder.ProjectName
        console.log(this.selectedProjectLocation);
        this.propService.getAllVaraintofProject(tempHolderValue.id).subscribe((data:any)=>{
          this.variantList=data.data
          this.variantNo=this.variantList.length
        },(err:any)=>{console.log(err);
        })
  }
  deleteVariant(id:any){
    this.propService.deleteSpecificVariant(id).subscribe((data:any)=>{
      console.log(data);
      alert(data.msg)
      this.getBHKVariants()
      
    },(err:any)=>{
      console.log(err);
      alert(err)
    })
  }
}
