import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropserviceService } from '../propservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router,public propService:PropserviceService) { }
username:string=''
pswd:string=''
status=''
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.username==="Admin" && this.pswd==="Paper@2023"){
        this.propService.isLoggedIn=true
        this.status="Login Successful"
        this.router.navigateByUrl('builderinfo')

    }
    else{
        this.status="Wrong username or password"
        console.log(this.username,this.pswd);
        
    }
  }

}
