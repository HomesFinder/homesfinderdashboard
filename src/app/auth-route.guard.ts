import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PropserviceService } from './propservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuard implements CanActivate {
  constructor(public propService:PropserviceService,public router:Router){}
  canActivate(): boolean {
    if (!this.propService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
 
  
}
