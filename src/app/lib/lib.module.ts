import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {InputComponent} from "./components/form/input/input.component";
import {ButtonComponent} from "./components/buttons/button.component";
import {LoadingButtonComponent} from "./components/buttons/loading-button.component";
import {CardComponent} from "./components/card/card.component";
import {ChipComponent} from "./components/chip/chip.component";
import {IconButtonComponent} from "./components/buttons/icon-button.component";
import {BottomSheetComponent} from "./components/bottom-sheet/bottom-sheet.component";
import {SelectComponent} from "./components/form/select/select.component";
import {InputDateComponent} from "./components/form/input/input-date.component";
import {CategoryPipe} from "./components/pipes/category.pipe";
import {ModalComponent} from "./components/modal/modal.component";
import {MessageComponent} from "./components/message/message.component";
import {
  CommonTransactionFormComponent
} from "./components/form/transaction/common-transaction-form.component";
import {SwitchComponent} from "./components/form/switch/switch.component";
import {ObservableDirective} from "./directives/observable.directive";
import {WebViewService} from "./service/web-view.service";
import {FormModule} from "./form.module";
import {CommonModule} from "@angular/common";

const components = [
  InputComponent,
  ButtonComponent,
  LoadingButtonComponent,
  CardComponent,
  ChipComponent,
  ObservableDirective,
  IconButtonComponent,
  BottomSheetComponent,
  SelectComponent,
  InputDateComponent,
  ModalComponent,
  CategoryPipe,
  MessageComponent,
  CommonTransactionFormComponent,
  SwitchComponent
];

const services = [WebViewService];
const modules = [
  FormModule,
  CommonModule
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...components, ...modules],
  providers: [...services]
})
export class LibModule {

}
