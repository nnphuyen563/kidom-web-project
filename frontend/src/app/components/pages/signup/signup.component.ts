import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  SignupForm!:FormGroup;
  isSubmitted = false;
  constructor(private formBuilder:FormBuilder) { }

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
    alert(`email: ${this.fc['email'].value}, password: ${this.fc['password'].value}`);
    this.SignupForm.reset();
  }
}

