import { Component } from '@angular/core';
import { AuthService } from 'src/app/globalServices/auth.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  myForm!: FormGroup;
  authErrors: string = '';
  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.min(0), Validators.max(120)]),
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value.email);
      const user = {
        email: this.myForm.value.email,
        password: this.myForm.value.password,
      };
      this.authService.login(user).subscribe({
        next: (data) => {
          console.log(data);
          this.authErrors = '';
        },
        error: (error) => {
          console.log(error);

          if (error.error.status == 403) {
            this.authErrors = 'Invalid credentials';
          }
        },
      });
    }
  }
}
