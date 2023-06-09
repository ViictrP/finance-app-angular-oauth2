import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {KeycloakAuthGuard, KeycloakService} from "keycloak-angular";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard extends KeycloakAuthGuard {

  constructor(protected override readonly router: Router,
              protected override readonly keycloakAngular: KeycloakService) {
    super(router, keycloakAngular);
  }

  async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (!this.authenticated) {
      await this.keycloakAngular.login({
        redirectUri: window.location.origin + state.url
      });
    }

    const requiredRoles = route.data['roles'];
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    const hasRole = requiredRoles.every(role => this.roles.includes(role));
    if (!hasRole) {
      await this.router.navigate(['/not-permitted']);
    }
    return hasRole;
  }

}
