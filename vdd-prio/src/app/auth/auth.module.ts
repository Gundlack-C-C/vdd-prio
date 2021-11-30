import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthNavItemComponent } from './AuthView/AuthNavItem/auth-nav-item.component';
import { VerifyEmailComponent } from './AuthView/VerifyEmail/VerifyEmail.component';
import { ForgotPasswordComponent } from './AuthView/ForgotPassword/ForgotPassword.component';
import { SignInComponent } from './AuthView/SignIn/SignIn.component';
import { SignUpComponent } from './AuthView/SignUp/SignUp.component';
import { AuthViewComponent } from './AuthView/AuthView.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { AuthGuard } from './auth.guard';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FontAwesomeModule,
  ],
  declarations: [
    AuthNavItemComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
    AuthViewComponent
  ],
  exports: [AuthViewComponent, AuthNavItemComponent, SignInComponent, SignUpComponent, ForgotPasswordComponent, VerifyEmailComponent],
  providers: [AuthService, AuthGuard],

})
export class AuthModule { 
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks(fas, far);
  }
}
