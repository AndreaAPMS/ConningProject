import { Component, OnInit } from '@angular/core';
import  {Observable} from 'rxjs';
import { LoaddataService } from '../../services/loaddata.service';

@Component({
  selector: 'app-conning-live',
  templateUrl: './conning-live.component.html',
  styleUrls: ['./conning-live.component.css']
})
export class ConningLiveComponent implements OnInit {
  public label_daynight = 'night' ;
  public status_daynight = 'day';
  public color_daynight = 'silver';
  public heading$: Observable<any>;
  public sog$: Observable<any>;
  public dpt$: Observable<any>;
  public TWD$: Observable<any>;
  public AWA$: Observable<any>;
  public TWS$: Observable<any>;
  public AWS$: Observable<any>;
  public rot$: Observable<any>;
  public vres: number;
  public hres: number;
  
  constructor(private _Loaddataservice: LoaddataService) { 
    this.hres = 1920;
    this.vres = 1170;
  
  }
  ngOnInit() {
    
   setTimeout (()=>{
    this.heading$ = this._Loaddataservice.heading$;
    this.sog$ = this._Loaddataservice.sog$;
    this.AWA$ = this._Loaddataservice.awa$;
    this.AWS$ = this._Loaddataservice.aws$;
    this.TWS$ = this._Loaddataservice.tws$;
    this.TWD$ = this._Loaddataservice.twd$;
    this.dpt$ = this._Loaddataservice.dpt$;
    this.rot$ = this._Loaddataservice.rot$;
   },500);
   
  }


  daynight (){
    if (this.status_daynight === 'day')
    {
      this.status_daynight = 'night';
      this.color_daynight = 'black';
      this.label_daynight = 'day';
    }
    else
    {
      this.status_daynight = 'day';
      this.color_daynight = 'silver';
      this.label_daynight = 'night';      
    }
  }

  daynightstyle(){
    return {
      'position':'absolute',
      'top': '10px',
      'right': (this.hres/12)+'px'
    }

  }
  topleftstyle (){
    return {
      'background-color': this.color_daynight,
      'width': (this.hres/3)+'px',
      'height': (this.vres/3)+'px',
      'left': '0px',
      'top': '40px'
    };
  }

  topcenterstyle(){
    return {
      'background-color': this.color_daynight,
      'width': (this.hres/3)+'px',
      'height': (this.vres/3)+'px',
      'top': '40px',
      'left': (this.hres/3)+'px'
    };
  }

  toprightstyle (){
    return {
      'background-color': this.color_daynight,
      'width': (this.hres/3)+'px',
      'height': (this.vres/3)+'px',
      'top': '40px',
      'left': 2*(this.hres/3)+'px'
    };
  }

  midleftstyle (){
    return {
      'background-color': this.color_daynight,
      'width': (this.hres/3)+'px',
      'height': (this.vres/3)+'px',
      'left': '0px',
      'top': (this.vres/3)+40+'px'
    };
  }
  midcenterstyle (){
    return {
      'background-color': this.color_daynight,
      'width': (this.hres/3)+'px',
      'height': (this.vres/3)+'px',
      'top': (this.vres/3)+40+'px',
      'left': (this.hres/3)+'px'
    };
  }
  midrightstyle (){
    return {
      'background-color': this.color_daynight,
      'width': (this.hres/3)+'px',
      'height': (this.vres/3)+'px',
      'top': (this.vres/3)+40+'px',
      'left': 2*(this.hres/3)+'px'
    };
  }
  bottomleftstyle (){
    return {
      'background-color': this.color_daynight,
      'width': (this.hres/3)+'px',
      'height': (this.vres/3)+'px',
      'left': '0px',
      'top': 2*(this.vres/3)+40+'px'
    };
  }
  bottomcenterstyle (){
    return {
      'background-color': this.color_daynight,
      'width': (this.hres/3)+'px',
      'height': (this.vres/3)+'px',
      'top': 2*(this.vres/3)+40+'px',
      'left': (this.hres/3)+'px'
    };
  }
  bottomrightstyle (){
    return {
      'background-color': this.color_daynight,
      'width': (this.hres/3)+'px',
      'height': (this.vres/3)+'px',
      'top': 2*(this.vres/3)+40+'px',
      'left': 2*(this.hres/3)+'px'
    };
  }

}


