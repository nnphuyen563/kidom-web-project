import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  SignupForm!:FormGroup;
  isSubmitted = false;
  Router: any;
  constructor(private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.SignupForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required],
      phonenumber:['', Validators.required],
      name:['', Validators.required],
      password2:['', Validators.required],
    }); 
  }

  get fc() {
    return this.SignupForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    
    if (this.SignupForm.invalid) return;
    alert(`email: ${this.fc['email'].value}, password: ${this.fc['password'].value}
    Mời bạn đăng nhập lại`);
    
    this.router.navigate(['/login']);
  }
}

