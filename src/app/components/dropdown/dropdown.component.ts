import {
  Component,
  Input,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <div class="relative ml-3 flex-shrink-0">
      <button
        (click)="toggleDropdown()"
        type="button"
        class="flex rounded-full bg-indigo-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-8 w-8 rounded-full"
          [src]="imageUrl"
          alt="{{ altText }}"
        />
      </button>
      <div
        *ngIf="isOpen"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="py-1" role="none">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class DropdownComponent {
  @Input() imageUrl: string;
  @Input() altText: string;
  @Input() action;
  selectedOption: string;
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  private clickListener: () => void;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.clickListener = this.renderer.listen(
      'document',
      'click',
      (event: Event) => {
        if (!this.elementRef.nativeElement.contains(event.target)) {
          this.isOpen = false;
        }
      }
    );
  }

  ngOnDestroy() {
    this.clickListener();
  }
}
