import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ProfileComponent} from './profile.component';
import {UserService} from '../../services/user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BottomSheetComponent} from '../../../lib/components/bottom-sheet/bottom-sheet.component';
import {LoadingButtonComponent} from '../../../lib/components/buttons/loading-button.component';
import {ButtonComponent} from '../../../lib/components/buttons/button.component';
import {InputComponent} from '../../../lib/components/form/input/input.component';
import {IconButtonComponent} from '../../../lib/components/buttons/icon-button.component';
import { PreferencesService } from '../../services/preferences.service';
import { WebViewService } from '../../../lib/service/web-view.service';
import { FormModule } from '../../../lib/form.module';
import { AuthService } from '../../../auth/service/auth.service';
import { KeycloakService } from 'keycloak-angular';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        BottomSheetComponent,
        LoadingButtonComponent,
        ButtonComponent,
        InputComponent,
        IconButtonComponent
      ],
      imports: [
        FormModule,
        HttpClientTestingModule
      ],
      providers: [
        UserService,
        PreferencesService,
        WebViewService,
        AuthService,
        KeycloakService
      ]
    });

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
