import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBillRs } from './app-container.model';

@Injectable({
  providedIn: 'root',
})
export class AppserviceService {
  constructor(private http: HttpClient) {}

  getBill(): Observable<GetBillRs[]> {
    return this.http.get<GetBillRs[]>(
      'http://localhost:8080/api/get-bill/list',
    );
  }
}
