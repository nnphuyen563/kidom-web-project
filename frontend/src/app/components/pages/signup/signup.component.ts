import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { AuthService } from '../../../services/auth/auth.service';

const
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  SignupForm!:FormGroup;
  isSubmitted = false;
  Router: any;
  constructor(private formBuilder:FormBuilder, 
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.SignupForm = this.formBuilder.group({
      email:['null', [Validators.required, Validators.email]],
      password:['null', Validators.required],
      phonenumber:['null', Validators.required],
      name:['null', Validators.required],
      password2:['null', Validators.required],
    }); 
  }

  get fc() {
    return this.SignupForm.controls;
  }
  onSubmit(): void {
    const password = this.SignupForm.get('password')?.value;
    const password2 = this.SignupForm.get('password2')?.value;
    if (password !== password2) {
      this.snackBar.open('Mật khẩu không đúng.', 'Close', {duration: 5000, panelClass: 'error-snackbar'});
      return;
    }
    this.isSubmitted = true;
    
    if (this.SignupForm.invalid) return;
    alert(`email: ${this.fc['email'].value}, password: ${this.fc['password'].value}
    Mời bạn đăng nhập lại`);
    
    this.router.navigate(['/login']);
  }
  this.authService.register(this.SignupForm.value).subscribe(
    (response) => {
      this.snackBar.open("Ba mẹ đã đăng ký thành công!", 'Close', { duration: 5000});
    },
    (error) => {
      this.snackBar.open("Đăng ký lỗi. Ba mẹ hãy thử lại nhé!", 'Close', { duration: 5000, panelClass: 'error-snackbar'});
    }
  )

}
