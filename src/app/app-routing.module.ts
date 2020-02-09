import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
import { ConningLiveComponent } from './conning-comp/conning-live/conning-live.component';

const routes: Routes = [
  {
    path: '',
    component: ConningLiveComponent
  },
  
 {
    path: 'maps',
    component: GooglemapsComponent
  },
  {
    path: 'conninglive',
    component: ConningLiveComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
