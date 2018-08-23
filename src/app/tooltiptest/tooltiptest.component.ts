import { Component, OnInit } from '@angular/core';

import { TooltipComponent } from '../tooltip/tooltip.component';

@Component({
  selector: 'app-tooltiptest',
  templateUrl: './tooltiptest.component.html',
  styleUrls: ['./tooltiptest.component.css']
})
export class TooltiptestComponent implements OnInit {

  showTip : boolean = false;
  //toolTip : TooltipComponent;

  toggleTip() {
    //this.toolTip.toggleTip();
    this.showTip = !this.showTip;
  }

  constructor() { }

  ngOnInit() {
  }


}


