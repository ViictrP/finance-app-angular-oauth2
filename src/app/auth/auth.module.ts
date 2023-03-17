import {APP_INITIALIZER, NgModule} from "@angular/core";
import {AuthService} from "./service/auth.service";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializer} from "./keycloak-initializer";
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
  imports: [KeycloakAngularModule],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ]
})
export class AuthModule {

}
