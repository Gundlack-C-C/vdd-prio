import { Component, Input } from '@angular/core';
import { getMonthOnly } from '../poll.service';


@Component({
  selector: 'app-mental-dashboard',
  templateUrl: './mental-dashboard.component.html',
  styleUrls: ['./mental-dashboard.component.css']
})
export class MentalDashboardComponent {
  @Input() symptome: any[] = [];
  @Input() ursachen: any[] = [];
  @Input() dates: any[] = [];
  @Input() data: any[] = [];
  @Input() correlation: any[] = [];

  date: string = ""

  onDateChanged(date: string) {
    this.date = getMonthOnly(new Date(date));
  }
}
