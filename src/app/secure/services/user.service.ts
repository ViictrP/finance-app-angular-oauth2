import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {environment} from "../environments/environment";
import UserDTO from "../../dto/user.dto";

@Injectable()
export class UserService {
  usersEndpoint: string = '';
  private _currentUser = new BehaviorSubject<UserDTO | undefined>(undefined);
  currentUser$ = this._currentUser.asObservable();

  set currentUser(user: UserDTO) {
    this._currentUser.next(user);
  }

  constructor(private readonly httpClient: HttpClient) {
    this.usersEndpoint = `${environment.serverURL}/v1/users`
  }

  public loadUserProfile(): Observable<UserDTO> {
    return this.httpClient.get<UserDTO>(`${this.usersEndpoint}/me`)
    .pipe(tap(profile => {
        profile.creditCards
        .forEach(creditCard => {
          creditCard.totalInvoiceAmount = creditCard.invoices[0]?.transactions
          .reduce((sum, current) =>
            sum + Number(current.amount), 0);
        });
      }),
      tap(user => this._currentUser.next(user)));
  }
}
