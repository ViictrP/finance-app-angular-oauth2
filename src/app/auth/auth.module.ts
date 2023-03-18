import {APP_INITIALIZER, NgModule} from "@angular/core";
import {AuthService} from "./service/auth.service";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializer} from "./keycloak-initializer";
import {AuthGuard} from "./guards/auth.guard";
import { NotPermittedComponent } from './components/not-permited/not-permitted.component';

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
  ],
  declarations: [
    NotPermittedComponent
  ],
  exports: [NotPermittedComponent]
})
export class AuthModule {

}
