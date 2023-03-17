import {Component, OnInit} from "@angular/core";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";
import User from "../entities/User";

@Component({
  selector: 'app-user-component',
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

  user$?: Observable<User>;
  constructor(private readonly userService: UserService) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.loadUserProfile();
  }
}
