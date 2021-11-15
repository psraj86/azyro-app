import { Component, OnInit } from '@angular/core';
import { Widget } from '../shared/widget/widget.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data:Widget[] = [];
  currentUser:any = JSON.parse(sessionStorage.getItem('user')!);
  constructor() { }
  ngOnInit(): void {
    console.log(this.currentUser);

    this.data.push({
      header:'Net Asset Value',
      amount:'$250M',
      growth:'1.1%',
      icon:'arrow_upward'
    },{
      header:'LTM EBITDA',
      amount:'$125M',
      growth:'12.4%',
      icon:'arrow_upward'
    },{
      header:'Forecast XIRR',
      amount:'10.2%',
      growth:'8.2%',
      icon:'arrow_upward'
    },{
      header:'Net Financial Impact',
      amount:'$5.8M',
      growth:'7.3%',
      icon:'arrow_upward'
    },{
      header:'Net Job Growth Rate',
      amount:'$12.4',
      growth:'10.1%',
      icon:'arrow_upward'
    })
  }

}
