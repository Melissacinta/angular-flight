import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  convertUnixToDate(unixTimestamp: number): Date {
    return new Date(unixTimestamp * 1000);
  }
}
