import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { PonyService } from '@data/services/pony.service';
import { Pony } from '@data/schema/pony';
import { NgxMasonryComponent } from 'ngx-masonry';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   ponies$: Observable<Pony[]> = this.ponyService.getAll();
   @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

   constructor(private ponyService: PonyService) {}

   ngOnInit(): void {}

   refreshMasonryLayout() {
      this.masonry.layout();
   }
}
