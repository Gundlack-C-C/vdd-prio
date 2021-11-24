import { Component, Input, OnInit } from '@angular/core';
import { Business } from '../BusinessAdmin.service'

@Component({
  selector: 'app-business-listgroup-item',
  templateUrl: './business-listgroup-item.component.html',
  styleUrls: ['./business-listgroup-item.component.css']
})
export class BusinessListgroupItemComponent implements OnInit {

  @Input() item: Business | null = null
  constructor() { }

  ngOnInit() {

  }

}
