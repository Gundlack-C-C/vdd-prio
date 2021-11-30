import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-SignUp',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.sass']
})
export class SignUpComponent implements OnInit {

  constructor(public ngAuthService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.router.navigate(['sign_in']);
  }
}
