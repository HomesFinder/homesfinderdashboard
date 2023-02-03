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

@NgModule({
  declarations: [
    AppComponent,
    PropformComponent,
    ProplistComponent,
   
    InquriesComponent,
    UsersComponent,
    TestimoniesComponent,
    BuilderinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
