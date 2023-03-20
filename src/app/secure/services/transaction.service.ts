import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import TransactionDTO from '../../dto/transaction.dto';
import {Observable} from 'rxjs';
import {environment} from "../environments/environment";

@Injectable()
export default class TransactionService {

  constructor(private readonly httpClient: HttpClient) {
  }

  save(transaction: TransactionDTO): Observable<TransactionDTO> {
    return this.httpClient.post<TransactionDTO>(`${environment.serverURL}/transactions`, transaction);
  }

  delete(transactionId: string, all: boolean): Observable<void> {
    return this.httpClient.delete<void>(`${environment.serverURL}/transactions/${transactionId}?all=${all}`);
  }
}
