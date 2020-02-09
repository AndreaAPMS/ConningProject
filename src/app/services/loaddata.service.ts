import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { lb4apiService, tw_calc, arrotonda } from './lb4api.service';
import { nmea, truewind,shipstatus } from 'src/app/classes/nmea';

@Injectable({
  providedIn: 'root'
})
export class LoaddataService {

  private _heading$: Observable<any> ;
  private _sog$: Observable<any>;
  private _awa$: Observable<any>;
  private _aws$: Observable<any>;
  private _twd$: Observable<any>;
  private _tws$: Observable<any>;
  private _rot$: Observable<any>;
  private _dpt$: Observable<any>;

  public myshipdata: shipstatus;
  public truewind = new truewind;
  public rot : number;


  constructor(private _lb4apiService: lb4apiService) {
    this.truewind.twa = 0;
    this.truewind.twd = 0;
    this.truewind.tws = 0;

    setInterval(()=>{
      //console.log('mi hai chiamato');
      this._lb4apiService.gettest('/conning')
                    .subscribe(data => { this.myshipdata = data; });
    },100);

    setInterval (()=>{
      this.truewind = tw_calc (this.myshipdata.awa,this.myshipdata.aws,this.myshipdata.sog,this.myshipdata.heading);
      //this.truewind = tw_calc (100,20,12,120);
      //console.log (this.truewind);
    },100);

    //calcolo il rate of turn
    var oldheading= 0;
    setInterval (()=>{
      this.rot = arrotonda( (this.myshipdata.heading-oldheading)*120,2);
      oldheading = this.myshipdata.heading;
    },500);

   }

   public get heading$ (){
     
    this._heading$ = interval(100).pipe(
      map( () => (this.myshipdata.heading === undefined)?'n/a':this.myshipdata.heading)
    );
     return this._heading$;
   }

   public get sog$ (){
     
    this._sog$ = interval(100).pipe(
      map( () => (this.myshipdata.sog === undefined)?'n/a':this.myshipdata.sog)
    );
     return this._sog$;
   }
   
   public get dpt$ (){
     
    this._dpt$ = interval(100).pipe(
      map( () => (this.myshipdata.dpt === undefined)?'n/a':this.myshipdata.dpt)
    );
     return this._dpt$;
   }
   public get awa$ (){
     
    this._awa$ = interval(100).pipe(
      map( () => (this.myshipdata.awa === undefined)?'n/a':this.myshipdata.awa)
    );
     return this._awa$;
   }

   public get aws$(){
   this._aws$ = interval(100).pipe(
    map( () => (this.myshipdata.aws === undefined)?'n/a':this.myshipdata.aws)
  );
   return this._aws$;
 }

 public get rot$(){
  this._rot$ = interval(100).pipe(
   map( () => this.rot)
 );
  return this._rot$;
}
 public get tws$(){
  this._tws$ = (true)?interval(100).pipe(
    map( () => (this.truewind.tws === undefined)?'n/a':this.truewind.tws)
  ):interval(100).pipe(
    map( () => (this.myshipdata.tws === undefined)?'n/a':this.myshipdata.tws)
  );
  return this._tws$;
}
public get twd$(){
  this._twd$ = (true)?interval(100).pipe(
    map( () => (this.truewind.twd === undefined)?'n/a':this.truewind.twd)
  ):interval(100).pipe(
    map( () => (this.myshipdata.twd === undefined)?'n/a':this.myshipdata.twd)
  );
  return this._twd$;
}


}
