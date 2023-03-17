import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {SecureComponent} from "./components/secure.component";
import {HomeComponent} from "./components/home/home.component";

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
