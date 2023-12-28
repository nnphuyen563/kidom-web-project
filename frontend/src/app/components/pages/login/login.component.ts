import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  isSubmitted = false;
  Router: any;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    });
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    
    alert(`email: ${this.fc['email'].value}, password: ${this.fc['password'].value}`)
    this.Router.navigate(['']);
  }
}
