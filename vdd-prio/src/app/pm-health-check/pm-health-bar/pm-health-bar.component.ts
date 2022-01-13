import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

function options_barchart(keys: string[], data: {erfolg: number[], misserfolg: number[]}) {
  return {
   tooltip: {
     trigger: 'axis',
     axisPointer: {
       type: 'shadow'
     }
   },
   legend: {},
   grid: {
     left: '3%',
     right: '4%',
     bottom: '3%',
     containLabel: true
   },
   xAxis: {
     type: 'value',
     boundaryGap: [0, 0.01],
     axisLabel: {
       formatter: "{value}"
     }
   },
   yAxis: {
     type: 'category',
     data: keys
   },
   series: [
     {
       name: 'Erfolg',
       type: 'bar',
       data: data.erfolg,
       color: '#198754'
     },
     {
       name: 'Misserfolg',
       type: 'bar',
       data: data.misserfolg,
       color: '#ffc107'
     }
   ]
 };
}

@Component({
  selector: 'app-pm-health-bar',
  templateUrl: './pm-health-bar.component.html',
  styleUrls: ['./pm-health-bar.component.css']
})
export class PmHealthBarComponent implements OnChanges {
  @Input() data: any[][] = []
  options = {}
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const keys = this.data.slice(1,this.data.length).map((item) => {
      return item[0];
    });
    const val_success = this.data.slice(1,this.data.length).map((item) => {
      return item[1];
    });
    const val_fail = this.data.slice(1,this.data.length).map((item) => {
      return item[2];
    });
    this.options = options_barchart(keys, {erfolg: val_success, misserfolg: val_fail});
  }
}
