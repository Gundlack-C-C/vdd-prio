import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-VerifyEmail',
  templateUrl: './VerifyEmail.component.html',
  styleUrls: ['./VerifyEmail.component.sass']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public ngAuthService: AuthService) { }

  ngOnInit() {
  }

}
