import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit, AfterViewInit {

  private chart!: am4charts.RadarChart;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.chart = am4core.create("radarChartDiv", am4charts.RadarChart);
    this.chart.data = [{
      "country": "Management",
      "litres": 200,
      "units": 400,
      "total": 601
    }, {
      "country": "Policy &\n Disclosure",
      "litres": 200,
      "units": 400,
      "total": 600

    }, {
      "country": "Risk &\n Opportunities",
      "litres": 201,
      "units": 400,
      "total": 600
    }, {
      "country": "Monitoring &\nEMS",
      "litres": 200,
      "units": 400,
      "total": 600
    }, {
      "country": "Stackholder \n Engagement",
      "litres": 200,
      "units": 400,
      "total": 600
    }];


    /* Create axes */
    var categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis<any>())
    // var categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";

    var valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis<any>());

    /* Create and configure series */
    var series = this.chart.series.push(new am4charts.RadarSeries());
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.name = "2017";
    series.strokeWidth = 3;
    series.zIndex = 2;
    series.sequencedInterpolation = true;
    series.sequencedInterpolationDelay = 100;

    var series1 = this.chart.series.push(new am4charts.RadarSeries());
    series1.dataFields.valueY = "units";
    series1.dataFields.categoryX = "country";
    series1.name = "2018";
    series1.strokeWidth = 3;
    series1.zIndex = 2;
    series1.sequencedInterpolation = true;
    series1.sequencedInterpolationDelay = 100;

    var series2 = this.chart.series.push(new am4charts.RadarSeries());
    series2.dataFields.valueY = "total";
    series2.dataFields.categoryX = "country";
    series2.name = "2019T";
    series2.strokeWidth = 3;
    series2.zIndex = 2;
    series2.sequencedInterpolation = true;
    series2.sequencedInterpolationDelay = 100;

    /* Add legend */
    this.chart.legend = new am4charts.Legend();

    /* Add cursor */
    this.chart.cursor = new am4charts.RadarCursor();
  }

}
