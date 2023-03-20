import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../environments/environment";
import InvoiceDTO from '../../dto/invoice.dto';

@Injectable()
export class InvoiceService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getInvoice(creditCardId: string, month: string, year: number): Observable<InvoiceDTO> {
    return this.httpClient.get<InvoiceDTO>(`${environment.serverURL}/credit-cards/${creditCardId}/invoices?month=${month}&year=${year}`);
  }
}
