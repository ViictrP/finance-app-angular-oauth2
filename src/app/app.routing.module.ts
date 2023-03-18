import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {AuthGuard} from "./auth/guards/auth.guard";
import {AppComponent} from "./components/app.component";
import {NotPermittedComponent} from "./auth/components/not-permited/not-permitted.component";

const routes: Route[] = [
  {
    path: '', pathMatch: 'full', redirectTo: 'secure'
  },
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['user']
    },
    children: [
      {
        path: 'secure',
        loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule)
      }
    ]
  },
  {
    path: 'not-permitted',
    component: NotPermittedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
