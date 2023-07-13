import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import UserDTO from '../../../dto/user.dto';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() user$?: Observable<UserDTO>;

  constructor(private readonly router: Router,
              private readonly auth: AuthService) {
  }

  editProfile() {
    this.router.navigate(['/secure/profile']);
  }

  logOut() {
    this.auth.logout();
  }
}
