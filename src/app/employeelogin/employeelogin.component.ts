import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropserviceService } from '../propservice.service';
@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.scss']
})
export class EmployeeloginComponent {
  employeeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private propService:PropserviceService) {}
  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      orgId: ['homesfinder.in@gmail.com', Validators.required],
      employeeEmail: ['', [Validators.required, Validators.email]],
      employeePassword: ['', Validators.required],
      adminPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.employeeForm.value.adminPassword!=='Javed@2001') {
      alert('Wrong Admin Password')
      
    }
    else if (this.employeeForm.valid) {
      // Process form data here
      console.log(this.employeeForm.value);
      let normalizedForm={
        "orgId":this.employeeForm.value.orgId,
        "emailId":this.employeeForm.value.employeeEmail,
        "pswd":this.employeeForm.value.employeePassword,
      }
      this.propService.addEmployee(normalizedForm).subscribe((data:any)=>{
          console.log(data);
          alert(data.message)
      },(err:any)=>{
        console.log(err);
        alert(err.error.message)
        
      })
    }
  }
}
