import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropformComponent } from './propform/propform.component';
import { ProplistComponent } from './proplist/proplist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { InquriesComponent } from './inquries/inquries.component';
import { UsersComponent } from './users/users.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';
import { BuilderinfoComponent } from './propform/builderinfo/builderinfo.component';
import { LoginComponent } from './login/login.component';
import { BhkSpecificComponent } from './bhk-specific/bhk-specific.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Propform2Component } from './propform2/propform2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import { ListfilterPipe } from './Pipes/listfilter.pipe';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { PostedPropsComponent } from './posted-props/posted-props.component';
import { StudioApartFormComponent } from './studio-apart-form/studio-apart-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PropformComponent,
    ProplistComponent,
   
    InquriesComponent,
    UsersComponent,
    TestimoniesComponent,
    BuilderinfoComponent,
    LoginComponent,
    BhkSpecificComponent,
    Propform2Component,
    ListfilterPipe,
    EmployeeloginComponent,
    PostedPropsComponent,
    StudioApartFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    NgbModule,
    NgbTypeaheadModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatChipsModule
   
    

  ],
  providers: [ListfilterPipe],
  exports:[ListfilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
