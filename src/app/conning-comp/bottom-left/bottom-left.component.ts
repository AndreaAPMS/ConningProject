import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bottom-left',
  templateUrl: './bottom-left.component.html',
  styleUrls: ['./bottom-left.component.css']
})
export class BottomLeftComponent implements OnInit {
  @Input() public hres: number;
  @Input() public vres: number;
  constructor() { }

  ngOnInit() {
  }

}
