import {NgModule} from "@angular/core";
import {SecureComponent} from "./components/secure.component";
import {SecureRoutingModule} from "./secure.routing.module";
import {UserService} from "./services/user.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "../layout/layout.module";
import {HomeComponent} from "./components/home/home.component";
import {InvoiceService} from "./services/invoice.service";
import {CreditCardService} from "./services/credit-card.service";
import TransactionService from "./services/transaction.service";
import {RecurringExpensesService} from "./services/recurring-expenses.service";
import {PreferencesService} from "./services/preferences.service";
import {AuthorizationInterceptor} from "./interceptors/authorization.interceptor";
import {UserHttpInterceptor} from "./interceptors/user-http.interceptor";

@NgModule({
  declarations: [SecureComponent, HomeComponent],
  imports: [
    SecureRoutingModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [
    UserService,
    InvoiceService,
    CreditCardService,
    TransactionService,
    RecurringExpensesService,
    PreferencesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserHttpInterceptor,
      multi: true
    }
  ]
})
export class SecureModule {

}
