import {Injectable} from "@angular/core";
import {KeycloakService} from "keycloak-angular";
import {KeycloakTokenParsed} from "keycloak-js";

@Injectable()
export class AuthService {

  constructor(private readonly keycloakService: KeycloakService) {
  }

  public getLoggedUser(): KeycloakTokenParsed | undefined {
    try {
      return this.keycloakService.getKeycloakInstance().idTokenParsed;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }

  public isLoggedIn() {
    return this.keycloakService.isLoggedIn();
  }

  public loadUserProfile() {
    return this.keycloakService.loadUserProfile();
  }

  public login(redirectUri: string) {
    this.keycloakService.login({redirectUri: redirectUri});
  }

  public logout() {
    this.keycloakService.logout(window.location.origin);
  }

  public reditectToProfile() {
    this.keycloakService.getKeycloakInstance().accountManagement();
  }

  public getRoles() {
    return this.keycloakService.getUserRoles();
  }
}
