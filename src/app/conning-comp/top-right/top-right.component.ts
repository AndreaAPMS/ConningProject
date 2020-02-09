import { Component, OnInit , Input,ViewChild, AfterViewInit} from '@angular/core';
import { Observable } from 'rxjs';
import { RadialGauge } from 'ng-canvas-gauges';


@Component({
  selector: 'app-top-right',
  templateUrl: './top-right.component.html',
  styleUrls: ['./top-right.component.css']
})
export class TopRightComponent implements OnInit {
  @Input() public rot$ : Observable<any>; 
  @Input() public hres: number;
  @Input() public vres: number;
  @ViewChild ('rot', null) private radialGauge: RadialGauge;
  public dim: number;
  
  constructor() { }

  ngOnInit() {
    this.dim = (this.hres/6);
    this.rot$.subscribe ({
      next: (v)=> console.log (v)
    });
  }
  ngAfterViewInit (){
    this.radialGauge.update  ({ height : this.dim });
    this.radialGauge.update  ({ width : this.dim });
  
  }

}
