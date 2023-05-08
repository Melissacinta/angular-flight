import { Component, Input } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
@Component({
  selector: 'app-header',
  template: ` <div class="bg-indigo-600 pb-32">
    <nav
      class="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none"
    >
      <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div
          class="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25"
        >
          <div class="flex items-center px-2 lg:px-0">
            <div
              class="flex-shrink-0 font-bold tracking-tight text-white text-2xl font-mono"
            >
              HamoyeFlights
            </div>
            <div class="hidden lg:ml-10 lg:block">
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="bg-indigo-700 text-white rounded-md py-2 px-3 text-sm font-medium"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </div>
            </div>
          </div>
          <div class="flex lg:hidden">
            <button
              class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              (click)="toggleNavbar()"
            >
              <bars-3-outline-icon
                *ngIf="!showMenu"
                class="block h-6 w-6"
                aria-hidden="true"
              ></bars-3-outline-icon>
              <x-mark-outline-icon
                *ngIf="showMenu"
                class="block h-6 w-6"
                aria-hidden="true"
              ></x-mark-outline-icon>
            </button>
          </div>

          <div class="hidden lg:ml-4 lg:block">
            <div class="flex items-center">
              <button
                type="button"
                class="flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
              >
                <span class="sr-only">View notifications</span>
                <bell-outline-icon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <app-dropdown
                imageUrl="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80"
                altText="Sally Flyer"
                ><button
                  type="button"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                  tabindex="-1"
                  (click)="toggleModal()"
                >
                  Sign out
                </button>
              </app-dropdown>
            </div>
          </div>
        </div>
        <div
          [ngClass]="{ hidden: !showMenu, block: showMenu }"
          class="lg:hidden"
        >
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              class="bg-indigo-700 text-white block rounded-md py-2 px-3 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
          </div>
          <div class="border-t border-indigo-700 pb-3 pt-4">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-white">sally walker</div>
                <div class="text-sm font-medium text-indigo-300">
                  sally@example.com
                </div>
              </div>
              <button
                type="button"
                class="ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
              >
                <span class="sr-only">View notifications</span>
                <bell-outline-icon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <button
                (click)="toggleModal()"
                class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <header class="py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1
          class="text-3xl font-bold font-mono tracking-tight text-white text-center mb-4"
        >
          Dashboard
        </h1>
        <p class="text-white max-w-2xl text-center mx-auto font-serif">
          Dashboard showing total number of flights arriving and departing from
          all airports on
          {{ this.utilsService.convertUnixToDate(begin) | date : 'longDate' }}
          within two hours interval from
          {{ this.utilsService.convertUnixToDate(begin) | date : 'shortTime' }}
          to
          {{ this.utilsService.convertUnixToDate(end) | date : 'shortTime' }},
          give or take 10mins.
        </p>
      </div>
    </header>
    <app-signout-modal
      (buttonClicked)="toggleModal()"
      [showModal]="showModal"
    ></app-signout-modal>
  </div>`,
  styles: [],
})
export class HeaderComponent {
  showMenu = false;
  @Input() begin: number;
  @Input() end: number;

  constructor(public utilsService: UtilsService) {}

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
  showModal: boolean = false;
  toggleModal = () => {
    this.showModal = !this.showModal;
  };
}
