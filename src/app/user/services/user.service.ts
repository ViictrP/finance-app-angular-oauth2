import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import User from "../entities/User";
import {environment} from "../environments/environment";

@Injectable()
export class UserService {
  usersEndpoint: string = '';
  private _currentUser = new BehaviorSubject<User | undefined>(undefined);

  constructor(private readonly httpClient: HttpClient) {
    this.usersEndpoint = `${environment.serverURL}/v1/users`
  }

  public loadUserProfile(): Observable<User> {
    return this.httpClient.get<User>(`${this.usersEndpoint}/me`)
    .pipe(tap(user => this._currentUser.next(user)));
  }
}
