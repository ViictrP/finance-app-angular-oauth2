import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../environments/environment";
import Invoice from '../../entities/Invoice';

@Injectable()
export class InvoiceService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getInvoice(creditCardId: string, month: string, year: number): Observable<Invoice> {
    return this.httpClient.get<Invoice>(`${environment.serverURL}/credit-cards/${creditCardId}/invoices?month=${month}&year=${year}`);
  }
}
