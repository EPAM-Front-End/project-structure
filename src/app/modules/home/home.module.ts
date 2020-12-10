import { NgModule } from '@angular/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from './page/home.component';
import { PonyItemComponent } from './page/pony-item/pony-item.component';
import { PonyDetailsComponent } from './page/pony-details/pony-details.component';

import { HomeRoutingModule } from './home.routing';

@NgModule({
   declarations: [HomeComponent, PonyItemComponent, PonyDetailsComponent],
   imports: [SharedModule, NgxMasonryModule, HomeRoutingModule]
})
export class HomeModule {}
