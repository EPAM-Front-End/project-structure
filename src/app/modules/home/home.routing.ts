import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PonyResolver } from './pony-resolver.service';
import { HomeComponent } from './page/home.component';
import { PonyDetailsComponent } from './page/pony-details/pony-details.component';

export const routes: Routes = [
   {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
   },
   {
      path: 'home',
      component: HomeComponent
   },
   {
      path: 'ponies/:id',
      component: PonyDetailsComponent,
      resolve: {
         pony: PonyResolver
      }
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class HomeRoutingModule {}
