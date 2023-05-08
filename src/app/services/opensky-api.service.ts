import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OpenskyApiService {
  private apiUrl = 'https://opensky-network.org/api';

  constructor(private http: HttpClient) {}

  getAllFlights(begin: number, end: number) {
    return this.http.get(
      `${this.apiUrl}/flights/all?begin=${begin}&end=${end}`
    );
  }
}
