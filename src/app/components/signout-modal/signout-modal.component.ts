import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signout-modal',
  template: `
    <div
      *ngIf="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
        >
          <!--body-->
          <div class="sm:flex sm:items-start">
            <div
              class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
            >
              <exclamation-triangle-outline-icon
                class="h-6 w-6 text-red-600"
                aria-hidden="true"
              ></exclamation-triangle-outline-icon>
            </div>
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900">
                Sign out of account
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Are you sure you want to sign out of your account?
                </p>
              </div>
            </div>
          </div>
          <!--footer-->
          <div class="mt-5 sm:mt-4 flex flex-row-reverse">
            <button
              type="button"
              class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              (click)="handleSignout()"
            >
              Sign out
            </button>
            <button
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              (click)="toggleModal()"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <div *ngIf="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  `,
  styles: [],
})
export class SignoutModalComponent implements OnInit {
  @Input() showModal: boolean = false;
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit(): void {}
  toggleModal() {
    this.buttonClicked.emit();
  }
  constructor(private router: Router, private toastr: ToastrService) {}

  handleSignout = () => {
    localStorage.removeItem('token');
    this.toastr.success('Sign out successful!');
    this.router.navigateByUrl('/');
  };
}
