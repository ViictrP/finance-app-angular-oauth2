import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";
import User from "../../entities/User";
import {DARK_THEME, LIGHT_THEME, PreferencesService} from "../services/preferences.service";
import {BaseComponent} from "./BaseComponent";

@Component({
  selector: 'app-secure-component',
  templateUrl: 'secure.component.html'
})
export class SecureComponent extends BaseComponent implements OnInit {

  user$?: Observable<User>;
  constructor(private readonly userService: UserService,
              readonly changeDetector: ChangeDetectorRef,
              private readonly preferencesService: PreferencesService) {
    super(changeDetector);
  }

  ngOnInit(): void {
    this.user$ = this.userService.loadUserProfile();
    this.subscribeAndRender(
      this.preferencesService.currentTheme$,
      theme => {
        document.documentElement.classList.remove(LIGHT_THEME);
        document.documentElement.classList.remove(DARK_THEME);
        document.documentElement.classList.add(!!theme ? theme : 'dark');
      },
    );
  }
}
