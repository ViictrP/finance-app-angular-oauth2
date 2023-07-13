import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {Router} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../../../secure/services/user.service';
import {of} from 'rxjs';
import UserDTO from '../../../dto/user.dto';
import {WebViewService} from '../../../lib/service/web-view.service';
import { AuthService } from '../../../auth/service/auth.service';
import { KeycloakService } from 'keycloak-angular';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let userService: UserService;
  let router: Router;

  const _user: UserDTO = {
    active: true,
    createdAt: new Date(),
    creditCards: [],
    email: 'email@email.com',
    id: 'QPOEQPWIRS',
    lastname: 'User',
    name: 'User',
    password: 'PQIWORUSLU##!@',
    transactions: [],
    recurringExpenses: []
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule],
      providers: [UserService, WebViewService, AuthService, KeycloakService]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should fetch secure profile on init', () => {
    jest.spyOn(userService, 'loadUserProfile').mockImplementation(() => of(_user));

    component.user$?.subscribe(user => expect(user).toStrictEqual(_user));
  });
});
