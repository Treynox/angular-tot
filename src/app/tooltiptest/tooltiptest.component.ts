import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

import { TooltipComponent } from '../tooltip/tooltip.component';

const ESCAPE_KEYCODE = 27;

@Component({
  selector: 'app-tooltiptest',
  templateUrl: './tooltiptest.component.html',
  styleUrls: ['./tooltiptest.component.css'],
  //directives:[TooltipComponent]
})
export class TooltiptestComponent implements OnInit {

  @ViewChild('btnAtool') tooltipA: TooltipComponent;
  @ViewChild('btnBtool') tooltipB: TooltipComponent;
  //showTip : boolean = false;
  //toolTip : TooltipComponent;

  toolTipOpen : boolean = false;

  openCheck(){
    if (this.tooltipA.showTip || this.tooltipB.showTip)
    {
      this.toolTipOpen = true;
    }
    else
    {
      this.toolTipOpen = false;
    }
  }

  toggleTipA() {
    this.tooltipA.toggleShow();
    this.tooltipB.showTip = false;
    //this.toolTip.toggleTip();
    //this.showTip = !this.showTip;
  }
  toggleTipB() {
    this.tooltipB.toggleShow();
    this.tooltipA.showTip = false;
  }

  hideAllTips(){
    this.tooltipA.showTip = false;
    this.tooltipB.showTip = false;
  }

  /*@HostListener('document:click', ['$event'])
  clickOutside(event) {
    this.hideAllTips();
  }*/
  
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === ESCAPE_KEYCODE) {
      this.hideAllTips();
    }
  }
  constructor() { 
    
  }

  ngOnInit() {
  }


}


