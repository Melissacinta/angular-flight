import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { HeaderComponent } from './components/header/header.component';
import { FlightTableComponent } from './components/flight-table/flight-table.component';
import { SignoutModalComponent } from './components/signout-modal/signout-modal.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    HeaderComponent,
    FlightTableComponent,
    SignoutModalComponent,
    SpinnerComponent,
    PaginationComponent,
    DropdownComponent,
    ToastComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgHeroiconsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ toastComponent: ToastComponent }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  convertUnixToDate = (num: number) => {
    return new Date(num * 1000);
  };
}
