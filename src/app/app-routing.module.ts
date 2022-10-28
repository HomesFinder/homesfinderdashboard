import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquriesComponent } from './inquries/inquries.component';

import { PropformComponent } from './propform/propform.component';
import { ProplistComponent } from './proplist/proplist.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component:PropformComponent
  },
  {
    path: 'prop-add',
    component:PropformComponent
  },
  {
    path: 'prop-edit',
    component:ProplistComponent
  },
  {
    path: 'inquiries',
    component:InquriesComponent
  },
  {
    path: 'users',
    component:UsersComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
