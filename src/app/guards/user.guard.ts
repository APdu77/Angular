import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  canActivate(): Promise<boolean> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
      }, 5000);
    });
  }
  
}
