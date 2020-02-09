import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { RadialGauge } from 'ng-canvas-gauges';
import {  Observable } from 'rxjs';


@Component({
  selector: 'app-mid-center',
  templateUrl: './mid-center.component.html',
  styleUrls: ['./mid-center.component.css']
})
export class MidCenterComponent implements OnInit {
  @Input() public value$: Observable<number> ;
  @Input() public hres: number;
  @Input() public vres: number;
  @ViewChild('gradi',null) public gradi: RadialGauge ;
  @ViewChild('decimi',null) public decimi: RadialGauge ;
  public headingunit: number;
  public altezza: number;
  
  
  constructor (){
  }

  ngOnInit() {
   // setInterval (()=>{console.log(this.value$);},1000)
   setTimeout (()=>{
    this.value$.subscribe ({
      next: (v) => {
        //console.log ("suca");
        this.headingunit = ((v*10)-(Math.trunc( v/10)*100))/10*2;
        //console.log(this.headingunit); 
     }
   });

   },3000);
   this.altezza = (this.vres/3)*2 ;

   }
   ngAfterViewInit() {
     //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
     //Add 'implements AfterViewInit' to the class.
      this.gradi.update  ({ height : 2*(this.vres/3)});
      this.gradi.update  ({ width : this.hres/3 });
      this.decimi.update ({ height: 62*((this.hres/3)/100) });
      this.decimi.update ({ width: 62*((this.hres/3)/100) });
   }

   gradistyle(){
     /*top: 0px;
    left: 0px;
    width: 640px;
    height: 400px; */
    return{
      'top':'0px',
      'left':'0px',
      'widht': this.hres/3+'px' ,
      'height': this.vres/3+'px'
    }
   }
   decimistyle(){
     return{
       /*top: 200px;
    left: 120px;
    width: 400px;
    height: 400px; */
      'top':((this.vres/3)-(62*((this.hres/3)/100))/2) + 'px',
      'left': (this.hres/6)-((62*((this.hres/3)/100))/2)+'px',
      'width': 62*((this.hres/3)/100) +'px',
      'height': 62*((this.hres/3)/100) +'px',
     }
   }
   
}