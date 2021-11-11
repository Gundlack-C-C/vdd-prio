import { Component, OnInit } from '@angular/core';
import { CSVService } from '../csv/csv.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent {

  constructor(private csv: CSVService) {}

  get data(): any {
    return this.csv.data;
  }
  
  onPrioChanged(data: any) {
    this.csv.data= data;
  }
}
