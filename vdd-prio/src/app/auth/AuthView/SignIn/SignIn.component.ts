import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-SignIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.sass']
})
export class SignInComponent implements OnInit {

  constructor(public ngAuthService: AuthService, public router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  forgetPasswortClick() {
    this.router.navigate(['flowcollect', 'forgot-password'])
  }

  signUpClick() {
    this.router.navigate(['flowcollect','sign-up'])
  }

}
