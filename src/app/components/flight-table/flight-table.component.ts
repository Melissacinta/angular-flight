import { Component, Input, Output } from '@angular/core';
import { Flight } from 'src/app/pages/dashbord/dashbord.component';

@Component({
  selector: 'app-flight-table',
  template: `
    <div class="inline-block min-w-full py-2 align-middle">
      <div
        class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
      >
        <table class="min-w-full divide-y divide-gray-300">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Airport
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Time
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Arriving
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Departing
              </th>
            </tr>
          </thead>

          <tbody
            *ngIf="data"
            class="divide-y divide-gray-200 bg-white font-serif w-full"
          >
            <tr
              *ngFor="
                let flight of data | slice : start - 1 : end;
                let i = index
              "
              [ngClass]="i % 2 !== 0 ? 'bg-gray-50' : ''"
            >
              <td
                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
              >
                {{ flight.airport }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ flight.time * 1000 | date : 'shortTime' }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ flight.arriving }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ flight.departing }}
              </td>
            </tr>
          </tbody>
        </table>
        <p *ngIf="isLoading" class="w-full  bg-white flex justify-center">
          <app-spinner
            extraclasses="h-6 w-6"
            color="text-gray-500"
          ></app-spinner>
        </p>
      </div>

      <div *ngIf="data?.length">
        <app-pagination
          [length]="data?.length || 0"
          [page]="page"
          (buttonClicked)="changePage($event)"
          [start]="start"
          [end]="end"
        />
      </div>
    </div>
  `,
  styles: [],
})
export class FlightTableComponent {
  @Input() data: Flight[] = [];
  @Input() page: number;
  @Input() start: number;
  @Input() end: number;
  @Input() isLoading: boolean = true;
  @Input() handlePageChange: (type: string) => void;

  changePage(message: string): void {
    // Handle the event in the parent component
    this.handlePageChange(message);
  }
}
