import { Component, Input, OnInit } from '@angular/core';
export interface Widget {
  header:string;
  amount: string;
  icon:string;
  growth:string;
}
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() widgetData!: Widget;
  constructor() { }

  ngOnInit(): void {
  }

}
