import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  @Input('message') message: string = "Default Mess"; 
  showTip : boolean = false;

  toggleShow() : void {
    this.showTip = !this.showTip;
  }

  constructor() { }

  ngOnInit() {
    this.message = this.message;
  }

}
