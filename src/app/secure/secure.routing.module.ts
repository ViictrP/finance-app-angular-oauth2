import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {SecureComponent} from "./components/secure.component";
import {HomeComponent} from "./components/home/home.component";
import {CreditCardsComponent} from "./components/credit-cards/credit-cards.component";

const routes: Route[] = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'credit-cards',
        component: CreditCardsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule {

}
