import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import TransactionDTO from '../../dto/transaction.dto';
import { Observable, of } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable()
export class RecurringExpensesService {

  constructor(private readonly httpClient: HttpClient) {
  }

  save(transaction: TransactionDTO): Observable<TransactionDTO> {
    return this.httpClient.post<TransactionDTO>(`${environment.serverURL}/recurring-expenses`, transaction);
  }
}
