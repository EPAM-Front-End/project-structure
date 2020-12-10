import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Pony } from '@data/schema/pony';

@Component({
   selector: 'app-pony-item',
   templateUrl: './pony-item.component.html',
   styleUrls: ['./pony-item.component.scss']
})
export class PonyItemComponent {
   @Input() pony: Pony;
   @Output() flipCard: EventEmitter<boolean> = new EventEmitter(false);

   flipped = false;

   flip() {
      this.flipped = !this.flipped;
      this.flipCard.emit(true);
   }
}
