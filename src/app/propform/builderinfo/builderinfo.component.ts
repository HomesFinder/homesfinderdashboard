import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-builderinfo',
  templateUrl: './builderinfo.component.html',
  styleUrls: ['./builderinfo.component.scss']
})
export class BuilderinfoComponent implements OnInit {
  form: any;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   

  
      this.form = this.fb.group({
        developerName: ['', Validators.required],
        reraNumber: ['', Validators.required],
        developerInformation: ['', Validators.required]
      });
    } 
  
    onsubmit() {
      console.log(this.form.value);
    }
  }
  


