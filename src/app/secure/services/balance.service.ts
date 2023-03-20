import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BalanceDTO} from '../../dto/balance.dto';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private readonly httpClient: HttpClient) { }

  getBalance(month: string, year: number): Observable<BalanceDTO> {
    return this.httpClient.get<BalanceDTO>(`${environment.serverURL}/balances?month=${month}&year=${year}`);
  }
}

