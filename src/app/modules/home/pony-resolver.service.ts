import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pony } from '@data/schema/pony';
import { PonyService } from '@data/services/pony.service';

@Injectable({
   providedIn: 'root'
})
export class PonyResolver implements Resolve<Pony> {
   constructor(private ponyService: PonyService, private router: Router) {}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      return this.ponyService.getById(route.params['id']).pipe(catchError(err => this.router.navigateByUrl('/')));
   }
}
