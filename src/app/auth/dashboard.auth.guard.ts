import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()

export class DashboardAuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(next, state): boolean {
        console.log('inside auth guard------->>>');
        if (!localStorage.getItem('Token')) {
            this.router.navigate(['/'])
            return false
        } else{
            return true;

        }
    }

}