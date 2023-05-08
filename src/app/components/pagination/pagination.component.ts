import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
@Component({
  selector: 'app-pagination',
  template: `<nav
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 font-serif"
    aria-label="Pagination"
  >
    <div class="hidden sm:block">
      <p class="text-sm text-gray-700">
        Showing <span class="font-medium mr-1">{{ start }}</span>
        <ng-container *ngIf="start !== end">
          to <span class="font-medium mr-1">{{ end }}</span>
        </ng-container>
        <span class="font-medium">of {{ length }}</span> results
      </p>
    </div>

    <div class="flex flex-1 justify-between sm:justify-end">
      <button
        [disabled]="page === 0"
        (click)="pageChange('prev')"
        class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
      >
        Previous
      </button>
      <button
        (click)="pageChange('next')"
        [disabled]="page + 1 === math.ceil(length / 10)"
        class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
      >
        Next
      </button>
    </div>
  </nav>`,
  styles: [],
})
export class PaginationComponent {
  @Input() length: number;
  @Input() page: number;
  @Input() start: number;
  @Input() end: number;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
  math = Math;

  pageChange(str: string) {
    this.buttonClicked.emit(str);
  }
}
