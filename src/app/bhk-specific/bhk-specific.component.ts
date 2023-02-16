import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-bhk-specific',
  templateUrl: './bhk-specific.component.html',
  styleUrls: ['./bhk-specific.component.scss']
})
export class BhkSpecificComponent implements OnInit {

  propertyForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.propertyForm = this.fb.group({
      PropertyID: ['', Validators.required],
      BHK: ['', Validators.required],
      Carpet_Area: ['', Validators.required],
      Pricing: ['', Validators.required],
      noOfBedrooms: ['', Validators.required],
      noOfBalcony: ['', Validators.required],
      noOfBathrooms: ['', Validators.required]
    });
  }

  onSubmit() {
  
    // Do something with the new property data (e.g. save it to a database)
  }

}
