import {
  Input,
  Component,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  showPassword = false;
  togglePassword = () => {
    this.showPassword = !this.showPassword;
  };

  @Input() error: string | null;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router, private toastr: ToastrService) {}
  submit() {
    if (
      this.form.value.username === 'admin' &&
      this.form.value.password === 'admin'
    ) {
      localStorage.setItem('token', 'admin');
      this.toastr.success('Login successful!');
      this.router.navigateByUrl('/dashboard');
    } else {
      this.toastr.error('Incorrect username or password.');
    }
  }

  throwErrow() {
    this.error = 'Invalid username or password';
    setTimeout(() => {
      this.error = '';
    }, 2000);
  }
}
