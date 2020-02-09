import { Component, OnInit } from '@angular/core';
import { lb4apiService, converticoordinate } from '../services/lb4api.service';
import { nmea, shipstatus} from '../classes/nmea';
import {  Observable } from 'rxjs';
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {
  public lat$: Observable<number>;
  public lng$: Observable<number>;
  title = 'suca';
  public myshipdata= new shipstatus; 
  public coordinate: {latitude: number, longitude: number};

  constructor(private _lb4apiService: lb4apiService) {}

  ngOnInit() {
      setInterval (()=>{
        this._lb4apiService.gettest('/conning')
        .subscribe 
        (
          data =>
          {
            this.myshipdata= data;
            
            //console.log (this.myshipdata); 
          }
        );
      },5000);

      this.lat$ = Observable.create ((observer:any) => {
        try{
          setInterval (()=>{
            //console.log(this.myshipdata.latpole);
            observer.next(converticoordinate (this.myshipdata.lat,this.myshipdata.latpole));
          },3000);   
        }catch(err){
          observer.error(err);
        }
      });
      this.lat$.subscribe();
      this.lng$ = Observable.create ((observer:any) => {
        try{
          setInterval (()=>{
            //console.log( this.myshipdata.lonpole );
            //console.log ( this.myshipdata.lon);
            observer.next(converticoordinate(this.myshipdata.lon,this.myshipdata.lonpole));
          },3000);   
        }catch(err){
          observer.error(err);
        }
      });
      this.lng$.subscribe();
  }

}
