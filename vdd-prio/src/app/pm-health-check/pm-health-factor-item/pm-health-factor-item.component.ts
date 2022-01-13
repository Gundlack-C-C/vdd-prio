import { Component, OnChanges, Input, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {HEALTH_WEIGHT, HEALTH_WEIGHT_KEYS, HEALTH_WEIGHT_FAIL, HEALTH_WEIGHT_SUCCESS, HEALTH_WEIGHT_DESCRIPTION} from '../pm-health-model';

@Component({
  selector: 'app-pm-health-factor-item',
  templateUrl: './pm-health-factor-item.component.html',
  styleUrls: ['./pm-health-factor-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PmHealthFactorItemComponent implements OnChanges {
  @Input() idx!: number
  @Input() score!: number;
  title: string = '';
  factor_fail: string = '';
  factor_success: string = '';
  weight_fail: number = 0;
  weight_success: number = 0;
  max_fail: number = 0;
  max_success: number = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const desc = HEALTH_WEIGHT_DESCRIPTION[this.idx+1];
    this.title = desc[0];
    this.factor_success = desc[1];
    this.factor_fail = desc[2];
    this.weight_fail = HEALTH_WEIGHT_FAIL[this.idx];
    this.weight_success = HEALTH_WEIGHT_SUCCESS[this.idx];
    this.max_fail = this.weight_fail * 5;
    this.max_success = this.weight_success * 5;
  }

  getScoreLabel(val: number): string{
    const labels: {[key: string]: string} = {
      "1": "Unzureichend",
      "2": "Mangel",
      "3": "Unbekannt",
      "4": "Ausreichend",
      "5": "Gut"
    }
    return labels[val];
  }
}
