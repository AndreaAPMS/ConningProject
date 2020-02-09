import { Component, OnInit, Input, AfterViewInit, ViewChild} from '@angular/core';
import { RadialGauge } from 'ng-canvas-gauges';

@Component({
  selector: 'app-mid-right',
  templateUrl: './mid-right.component.html',
  styleUrls: ['./mid-right.component.css']
})
export class MidRightComponent implements OnInit {
  @Input() public hres: number;
  @Input() public vres: number;
  @ViewChild('stbd_rpm',null) public RPM_gauge: RadialGauge;
  @ViewChild('stbd_pitch',null) public Pitch_gauge: RadialGauge;
  public dim: number;
  public width: number;

  constructor() { }

  ngOnInit() {
    this.dim = (this.hres/6);
    this.width = (this.dim/100)*55;
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.RPM_gauge.update  ({ height : (this.vres/3) });
    this.RPM_gauge.update  ({ width : this.width });
    this.Pitch_gauge.update  ({ height : (this.vres/3) });
    this.Pitch_gauge.update  ({ width : this.width });
    
  }
  stbdrpmstyle(){
    return {
      'top': '0px',
      'left': '0px',
      
      'width': this.dim + 'px',
      'height': (this.vres/3) + 'px'
    }

  }
  stbdpitchstyle(){
    return {
      'top': '0px',
      'left': this.dim + 'px',
      'width': this.dim + 'px',
      'height': (this.vres/3)+ 'px'
    }

  }
}
