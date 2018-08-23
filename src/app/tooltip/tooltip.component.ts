import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  hiddenTip : boolean = true;

  toggleTip() {
    this.hiddenTip = !this.hiddenTip;
  }

  constructor() { }

  ngOnInit() {
  }

}
