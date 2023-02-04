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
  

  constructor(private fb: FormBuilder,public propService:PropserviceService) { }

  ngOnInit(): void {
   

  
      this.form = this.fb.group({
        DeveloperName: ['', Validators.required],
        DeveloperReraNumber: ['', Validators.required],
        DeveloperBriefDetails: ['', Validators.required]
      });
    } 
  
    onsubmit() {
      console.log(this.form.value);
      this.propService.postDeveloper(this.form.value)
    }
  }
  


