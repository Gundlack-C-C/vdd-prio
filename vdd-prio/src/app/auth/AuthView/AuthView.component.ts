import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-AuthView',
  templateUrl: './AuthView.component.html',
  styleUrls: ['./AuthView.component.sass']
})
export class AuthViewComponent {

  _view: string = "login"

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe( (params) => {
      this._view = params.view;
    });
  }
}
