import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PropserviceService } from 'src/app/propservice.service';

@Component({
  selector: 'app-builderinfo',
  templateUrl: './builderinfo.component.html',
  styleUrls: ['./builderinfo.component.scss']
})
export class BuilderinfoComponent implements OnInit {
  form: any;
  updateID:any
  allDevelopers:any
  disable:boolean=true
search: any;
  constructor(private fb: FormBuilder,public propService:PropserviceService) { }

  ngOnInit(): void {
    this.getAllDevelopers()

  
      this.form = this.fb.group({
        _id: [""],
        DeveloperName: ['', Validators.required],
        // DeveloperReraNumber: ['', Validators.required],
        DeveloperBriefDetails: ['', Validators.required],
        DeveloperPriority: ["", Validators.required]
      });
      this.updateID = this.fb.group({
        _id: ["", Validators.required,],
        DeveloperName: ["", Validators.required],
        DeveloperBriefDetails: ['', Validators.required],
        priority: ["", Validators.required]
      });
    } 
  
    onsubmit() {
      console.log(this.form.value);
      this.propService.postDeveloper(this.form.value)
  
    }
    getAllDevelopers(){
      this.propService.getAllDevelopers().subscribe((data:any)=>{
          this.allDevelopers=data.data
          // console.log(this.allDevelopers);
          
      },(err:any)=>{})
    }
    editProp(developer:any){
        console.log(developer);
        this.form.patchValue({
        _id:developer._id,
        DeveloperName:developer.DeveloperName,
        DeveloperBriefDetails:developer.DeveloperBriefDetails,
        DeveloperPriority:developer.DeveloperPriority,
      })
    }
    onIDUpdate(){
      console.log(this.updateID.value);
      
      this.propService.updateDeveloperPriority(this.form.value).subscribe((data:any)=>{
        alert("Updated Successfully")
        console.log(data);
        
        this.getAllDevelopers()
      },(err:any)=>{
        console.log(err);
        
        alert("Updation Failed")
      })
    }
  }
  


