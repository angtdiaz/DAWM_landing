import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.joyeria) {

      this.router.navigateByUrl('/dashboard');
    }
    return true;
  }
}