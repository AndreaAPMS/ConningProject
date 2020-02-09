import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bottom-right',
  templateUrl: './bottom-right.component.html',
  styleUrls: ['./bottom-right.component.css']
})
export class BottomRightComponent implements OnInit {
  @Input() public hres: number;
  @Input() public vres: number;
  constructor() { }

  ngOnInit() {
  }

}
