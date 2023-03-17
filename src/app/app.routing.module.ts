import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {AuthGuard} from "./auth/guards/auth.guard";
import {AppComponent} from "./components/app.component";
import {LayoutComponent} from "./layout/components/layout.component";

const routes: Route[] = [
  {
    path: '', pathMatch: 'full', redirectTo: 'user'
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: 'user',
      loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
