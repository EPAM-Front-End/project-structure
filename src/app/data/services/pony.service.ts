import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pony } from '@data/schema/pony';
import { JsonApiService } from './json-api.service';

@Injectable({
   providedIn: 'root'
})
export class PonyService {
   constructor(private jsonApiService: JsonApiService) {}

   getAll(): Observable<Array<Pony>> {
      return this.jsonApiService.get('/ponies');
   }

   getById(id: number): Observable<Pony> {
      return this.jsonApiService.get('/ponies/' + id);
   }
}
