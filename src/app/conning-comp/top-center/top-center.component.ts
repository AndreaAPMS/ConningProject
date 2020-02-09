import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-center',
  templateUrl: './top-center.component.html',
  styleUrls: ['./top-center.component.css']
})
export class TopCenterComponent implements OnInit {
@Input() public hres: number;
@Input() public vres: number;
public dim: number;

  constructor() { }

  ngOnInit() {
    this.dim = this.hres/3
  }
 topcenterstyle(){
   return {
     
     'width':this.dim + 'px'
   }
 }
}
