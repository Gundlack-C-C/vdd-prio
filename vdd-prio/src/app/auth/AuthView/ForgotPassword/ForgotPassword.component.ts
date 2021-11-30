import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-ForgotPassword',
  templateUrl: './ForgotPassword.component.html',
  styleUrls: ['./ForgotPassword.component.sass']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public ngAuthService: AuthService) { }

  ngOnInit() {
  }

}
