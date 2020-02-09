import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaugesModule } from 'ng-canvas-gauges';
import { TopLeftComponent } from './conning-comp/top-left/top-left.component';
import { TopCenterComponent } from './conning-comp/top-center/top-center.component';
import { TopRightComponent } from './conning-comp/top-right/top-right.component';
import { MidLeftComponent } from './conning-comp/mid-left/mid-left.component';
import { MidCenterComponent } from './conning-comp/mid-center/mid-center.component';
import { MidRightComponent } from './conning-comp/mid-right/mid-right.component';
import { BottomLeftComponent } from './conning-comp/bottom-left/bottom-left.component';
import { BottomCenterComponent } from './conning-comp/bottom-center/bottom-center.component';
import { BottomRightComponent } from './conning-comp/bottom-right/bottom-right.component';
import { HttpClientModule } from '@angular/common/http';
import { lb4apiService } from './services/lb4api.service';
import { AgmCoreModule } from '@agm/core';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ConningLiveComponent } from './conning-comp/conning-live/conning-live.component';

@NgModule({
  declarations: [
    AppComponent,
    TopLeftComponent,
    TopCenterComponent,
    TopRightComponent,
    MidLeftComponent,
    MidCenterComponent,
    MidRightComponent,
    BottomLeftComponent,
    BottomCenterComponent,
    BottomRightComponent,
    GooglemapsComponent,
    ConningLiveComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDjmDtRNnpZ1s-u0JxYMmM6LnTW2UV0H8E'
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    GaugesModule,
    HttpClientModule,
    MDBBootstrapModule,
    MDBBootstrapModule.forRoot(),

  ],
  providers: [lb4apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//AIzaSyDjmDtRNnpZ1s-u0JxYMmM6LnTW2UV0H8E chiave google