import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business-landingpage',
  templateUrl: './business-landingpage.component.html',
  styleUrls: ['./business-landingpage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BusinessLandingpageComponent {

  _view = "sign-in"
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( (params) => {
      this._view = params.view;
      console.log(params.view)
    });
  }
}
