import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import User from '../../../entities/User';
import {UserService} from '../../../secure/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user?: Observable<User>;

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  editProfile() {
  }

  logOut() {
  }
}
