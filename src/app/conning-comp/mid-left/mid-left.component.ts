import { Component, OnInit, Input,  ViewChild, AfterViewInit } from '@angular/core';
import { RadialGauge } from 'ng-canvas-gauges';

@Component({
  selector: 'app-mid-left',
  templateUrl: './mid-left.component.html',
  styleUrls: ['./mid-left.component.css']
})
export class MidLeftComponent implements OnInit {
  @ViewChild('port_rpm',null) public RPM_gauge: RadialGauge;
  @ViewChild('port_pitch',null) public Pitch_gauge: RadialGauge;
  @Input() public hres: number;
  @Input() public vres: number;
  public dim: number;
  public width: number;
  
  constructor() { }

  ngOnInit() {
    this.dim = (this.hres/6);
    this.width = (this.dim/100)*55;

  }
  
  ngAfterViewInit () {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.RPM_gauge.update  ({ height : (this.vres/3) });
    this.RPM_gauge.update  ({ width : this.width });
    this.Pitch_gauge.update  ({ height : (this.vres/3) });
    this.Pitch_gauge.update  ({ width : this.width });
  }
  portrpmstyle(){
    return {
      'top': '0px',
      'left': this.dim + 'px',
      'width': this.dim + 'px',
      'height': (this.vres/3) + 'px'
    }

  }
  portpitchstyle(){
    return {
      'top': '0px',
      'left': '0px',
      'width': this.dim + 'px',
      'height': (this.vres/3)+ 'px'
    }

  }

}
