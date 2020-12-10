import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from './json/data.json';

@Injectable({
   providedIn: 'root'
})
export class JsonApiService {
   get(url: string): Observable<any> {
      switch (url) {
         case '/ponies':
            return of(data.ponies);
         default:
            const id = url.substring(url.lastIndexOf('/') + 1);
            return of(data.ponies[id]);
      }
   }
}
