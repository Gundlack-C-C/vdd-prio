import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { CSVModule } from './csv/csv.module';
import { PrioModule } from './prio/prio.module';
import { PollModule } from './poll/poll.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { HomeComponent } from './Home/Home.component';
import { AgileManifestModule } from './agile-manifest/agile-manifest.module';
import { FlowcollectModule } from './flowcollect/flowcollect.module';
import { BusinessAdminModule } from './business-admin/business-admin.module';
import { SectionAdminModule } from './section-admin/section-admin.module';
import { AuthModule } from './auth/auth.module';
import { ConnectedAppModule } from './connected-app/connected-app.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FontAwesomeModule,
    CSVModule,
    PrioModule,
    PollModule,
    AgileManifestModule,
    FlowcollectModule,
    BusinessAdminModule,
    SectionAdminModule,
    AuthModule,
    ConnectedAppModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks(fas, far, fab);
  }
}
