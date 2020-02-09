import { Component, OnInit, Input , ViewChild, AfterViewInit} from '@angular/core';
import {  Observable } from 'rxjs';
import { RadialGauge } from 'ng-canvas-gauges';

@Component({
  selector: 'app-top-left',
  templateUrl: './top-left.component.html',
  styleUrls: ['./top-left.component.css']
})

export class TopLeftComponent implements OnInit , AfterViewInit{
  @ViewChild ('relativewind', null) 
  private radialGauge: RadialGauge;
  @ViewChild ('truewinddir', null) 
  private radialGauge1: RadialGauge;
  @Input() public TWD$: Observable<number>;
  @Input() public TWS$: Observable<number>;
  @Input() public AWA$: Observable<number>;
  @Input() public AWS$: Observable<number>;
  @Input() public hres: number;
  @Input() public vres: number;
  public dim: number;
  public textsize: number;
  

  

  constructor() { 
    
  }

  ngOnInit() {
    this.dim = (this.hres/6);
    this.textsize = (this.dim/100)*(15);
    
  }
  ngAfterViewInit (){
    this.radialGauge.update  ({ height : this.dim });
    this.radialGauge.update  ({ width : this.dim });
    this.radialGauge1.update  ({ height : this.dim });
    this.radialGauge1.update  ({ width : this.dim });
  }
  relativewinddirstyle(){
    return {
      'top': '0px',
      'left': this.dim + 'px',
      'width': this.dim + 'px',
      'height': this.dim + 'px'
    }
  }
  truewinddirstyle(){
    return {
      'top': '0px',
      'left': '0px',
      'width': this.dim + 'px',
      'height': this.dim + 'px'
    }
  }
  truewindspeedstyle(){
    return {
      'top': this.dim + 'px',
      'left': '0px',
      'width': this.dim + 'px',
      'height':  ((this.vres/3)-this.dim)+'px',
      'font-size': this.textsize+'px'
    }
  }
  relativewindspeedstyle(){
    return {
      'top': this.dim + 'px',
      'left': this.dim + 'px',
      'width': this.dim + 'px',
      'height':  ((this.vres/3)-this.dim)+'px',
      'font-size': this.textsize+'px'
    }
  }
}
