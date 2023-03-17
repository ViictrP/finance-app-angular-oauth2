import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./components/header/header.component";
import {LibModule} from "../lib/lib.module";
import {BottomNavComponent} from "./components/bottom-nav/bottom-nav.component";

const components = [
  HeaderComponent,
  BottomNavComponent
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [...components],
  imports: [RouterModule, LibModule],
  exports: [...components, LibModule]
})
export class LayoutModule {

}
