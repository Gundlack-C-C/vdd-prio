import { Component } from '@angular/core';
import { CSVService } from './csv/csv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vdd-prio';
  constructor(private csv: CSVService) {

  }

  get data(): any {
    return this.csv.data;
  }

  onPrioChanged(data: any) {
    this.csv.data= data;
  }
}
