import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pony } from '@data/schema/pony';

@Component({
   selector: 'app-pony-details',
   templateUrl: './pony-details.component.html'
})
export class PonyDetailsComponent implements OnInit {
   pony$: Observable<Pony>;

   constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
      this.pony$ = this.route.data.pipe(map(data => data.pony));
   }
}
