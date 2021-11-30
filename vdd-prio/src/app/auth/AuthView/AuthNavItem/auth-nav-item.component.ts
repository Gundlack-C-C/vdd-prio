import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-auth-nav-item',
  templateUrl: './auth-nav-item.component.html',
  styleUrls: ['./auth-nav-item.component.css']
})
export class AuthNavItemComponent implements OnInit {

  constructor(public ngAuthService: AuthService) { }

  ngOnInit() {
  }

  get name(): string {
    return this.ngAuthService.userState.email
  }
  
  get loggedin() : boolean {
    return this.ngAuthService.isLoggedIn
  }

  logout() {
    this.ngAuthService.SignOut()
  }


}
