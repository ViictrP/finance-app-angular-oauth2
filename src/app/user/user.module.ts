import {NgModule} from "@angular/core";
import {UserComponent} from "./components/user.component";
import {RouterModule} from "@angular/router";
import {UserRoutingModule} from "./user.routing.module";
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule, NgIf} from "@angular/common";

@NgModule({
  declarations: [UserComponent],
  imports: [
    UserRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [UserService]
})
export class UserModule {

}
