import { Component, OnInit, Input} from '@angular/core';
import {  Observable } from 'rxjs';


@Component({
  selector: 'app-bottom-center',
  templateUrl: './bottom-center.component.html',
  styleUrls: ['./bottom-center.component.css']
})
export class BottomCenterComponent implements OnInit {
  @Input() public heading$: Observable<any> ;
  @Input() public sog$: Observable<any>;
  @Input() public dpt$: Observable<any>;
  @Input() public rot$: Observable<any>;
  @Input() public hres: number;
  @Input() public vres: number;
  public green: boolean;
  public red: boolean;
  
  constructor() { 

  }

  ngOnInit() {
    setTimeout (()=>{
      this.rot$.subscribe({
              next:(v)=> {this.green=(v>0)?true:false;
              this.red = (v<0)?true:false;
            }
      });
    },1000);
    
  }
  ngOnDestroy(){
  }

}
