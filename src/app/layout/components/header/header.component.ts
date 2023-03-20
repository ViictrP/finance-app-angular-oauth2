import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import UserDTO from '../../../dto/user.dto';
import {UserService} from '../../../secure/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user?: Observable<UserDTO>;

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  editProfile() {
  }

  logOut() {
  }
}
