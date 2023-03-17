import {Component} from '@angular/core';
import {AuthConfig, NullValidationHandler, OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finance App';
  authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/realms/finance-app',
    redirectUri: window.location.origin + "/home",
    clientId: 'finance-app-frontend',
    scope: 'openid email profile',
    responseType: 'code',
    disableAtHashCheck: true,
    showDebugInformation: true
  }

  constructor(private readonly oauthService: OAuthService) {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logoff() {
    this.oauthService.logOut();
  }
}
