import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  private chart!: am4charts.XYChart;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.chart = am4core.create('barChartDiv', am4charts.XYChart);
    this.chart.data = this.chart.data = [{
      "country": "Executive",
      "research": 501.9,
      "marketing": 250,
      "sales": 199,
      "a":123,
      "b":322,
      "c":124,
      "d":312
    }, {
      "country": "Managers",
      "research": 301.9,
      "marketing": 222,
      "sales": 251,
      "a":123,
      "b":322,
      "c":124,
      "d":312
    }, {
      "country": "Professionals",
      "research": 201.1,
      "marketing": 170,
      "a":123,
      "b":322,
      "c":124,
      "d":312
    }, {
      "country": "All Others",
      "research": 165.8,
      "marketing": 122,
      "a":123,
      "b":322,
      "c":124,
      "d":312
    }];

    var categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Local country offices";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;

    var valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Expenditure (M)";

    // Create series
    var series = this.chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "research";
    series.dataFields.categoryX = "country";
    series.name = "White";
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = true;
    //series.columns.template.column.adapter.add("cornerRadiusTopLeft", cornerRadius());
    //series.columns.template.column.adapter.add("cornerRadiusTopRight", cornerRadius);

    var series2 = this.chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "marketing";
    series2.dataFields.categoryX = "country";
    series2.name = "Black/African Descent";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";
    series2.stacked = true;
    //series2.columns.template.column.adapter.add("cornerRadiusTopLeft", cornerRadius);
    //series2.columns.template.column.adapter.add("cornerRadiusTopRight", cornerRadius);

    var series3 = this.chart.series.push(new am4charts.ColumnSeries());
    series3.dataFields.valueY = "sales";
    series3.dataFields.categoryX = "country";
    series3.name = "American / Aslakan Native";
    series3.tooltipText = "{name}: [bold]{valueY}[/]";
    series3.stacked = true;

    var series4 = this.chart.series.push(new am4charts.ColumnSeries());
    series4.dataFields.valueY = "a";
    series4.dataFields.categoryX = "country";
    series4.name = "Two or More Races";
    series4.tooltipText = "{name}: [bold]{valueY}[/]";
    series4.stacked = true;

    var series5 = this.chart.series.push(new am4charts.ColumnSeries());
    series5.dataFields.valueY = "b";
    series5.dataFields.categoryX = "country";
    series5.name = "Asian";
    series5.tooltipText = "{name}: [bold]{valueY}[/]";
    series5.stacked = true;

    var series5 = this.chart.series.push(new am4charts.ColumnSeries());
    series5.dataFields.valueY = "c";
    series5.dataFields.categoryX = "country";
    series5.name = "Hispanic / Latino";
    series5.tooltipText = "{name}: [bold]{valueY}[/]";
    series5.stacked = true;

    var series7 = this.chart.series.push(new am4charts.ColumnSeries());
    series7.dataFields.valueY = "d";
    series7.dataFields.categoryX = "country";
    series7.name = "Hawailan / Pacific Islander";
    series7.tooltipText = "{name}: [bold]{valueY}[/]";
    series7.stacked = true;
    //series3.columns.template.column.adapter.add("cornerRadiusTopLeft", cornerRadius);
    //series3.columns.template.column.adapter.add("cornerRadiusTopRight", cornerRadius);

    // Add cursor
    this.chart.cursor = new am4charts.XYCursor();

    // function cornerRadius(radius, item) {
    //   var dataItem = item.dataItem;

    //   // Find the last series in this stack
    //   var lastSeries;
    //   this.chart.series.each(function (series) {
    //     if (dataItem.dataContext[series.dataFields.valueY] && !series.isHidden && !series.isHiding) {
    //       lastSeries = series;
    //     }
    //   });

    //   // If current series is the one, use rounded corner
    //   return dataItem.component == lastSeries ? 10 : radius;
    // }

    this.chart.legend = new am4charts.Legend();

  }
}
