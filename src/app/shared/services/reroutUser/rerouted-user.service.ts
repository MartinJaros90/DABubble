import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ReroutedUserService {

  constructor(private router: Router) { }

  reroutedUser(path: string) {
    this.router.navigate([path]).then(success => {
      if (success) {
        console.info('Navigation successful');
      } else {
        console.warn('Navigation failed');
      }
    }).catch(err => {
      console.error('Navigation error:', err);
    });
  }
}
