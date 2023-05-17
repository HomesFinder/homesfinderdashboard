import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRouteGuard } from './auth-route.guard';
import { BhkSpecificComponent } from './bhk-specific/bhk-specific.component';
import { InquriesComponent } from './inquries/inquries.component';
import { LoginComponent } from './login/login.component';
import { BuilderinfoComponent } from './propform/builderinfo/builderinfo.component';

import { PropformComponent } from './propform/propform.component';
import { Propform2Component } from './propform2/propform2.component';
import { ProplistComponent } from './proplist/proplist.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';
import { UsersComponent } from './users/users.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { PostedPropsComponent } from './posted-props/posted-props.component';

const routes: Routes = [
  {
    path: '',
    component:Propform2Component,
    canActivate: [AuthRouteGuard]
  },
  {
    path: 'prop-add',
    component:Propform2Component,
    canActivate: [AuthRouteGuard]
  },
  {
    path: 'prop-edit',
    component:ProplistComponent,
    canActivate: [AuthRouteGuard]
  },
  {
    path: 'inquiries',
    component:InquriesComponent,
    canActivate: [AuthRouteGuard]

  },
  {
    path: 'users',
    component:UsersComponent,
    canActivate: [AuthRouteGuard]
  },
  {
    path: 'testimonies',
    component:TestimoniesComponent,
    canActivate: [AuthRouteGuard]
  },
  {
    path: 'builderinfo',
    component:BuilderinfoComponent,
    canActivate: [AuthRouteGuard]
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'bhkSpecific',
    component:BhkSpecificComponent,
    canActivate: [AuthRouteGuard]
  },

  {
    path:'propform2',
    component:Propform2Component,
    canActivate: [AuthRouteGuard]
  },

  {
    path:'employeelogin',
    component:EmployeeloginComponent,
    canActivate: [AuthRouteGuard]
  },
  {
    path:'postedProps',
    component:PostedPropsComponent,
    canActivate: [AuthRouteGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
