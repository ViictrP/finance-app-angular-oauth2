import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import CreditCardDTO from '../../dto/credit-card.dto';
import {Observable} from 'rxjs';
import {environment} from "../environments/environment";

@Injectable()
export class CreditCardService {

  constructor(private readonly httpClient: HttpClient) {
  }

  saveCreditCard(creditCard: CreditCardDTO, shouldUpdate: boolean): Observable<CreditCardDTO> {
    const url = `${environment.serverURL}/credit-cards`;

    if (shouldUpdate) {
      return this.httpClient.put<CreditCardDTO>(url + `/${creditCard.id}`, creditCard);
    } else {
      return this.httpClient.post<CreditCardDTO>(url, creditCard);
    }
  }
}
