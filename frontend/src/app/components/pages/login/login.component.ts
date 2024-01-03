import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/User';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  isSubmitted = false;
  Router: any;
  constructor(private formBuilder:FormBuilder, private router: Router, private userService: UserService ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required],
    });
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    const authenticatedUser: User | undefined = this.userService.authenticateUser(
      this.fc['email'].value,
      this.fc['password'].value
    );

    if (authenticatedUser) {
      // Check user role and navigate accordingly
      if (authenticatedUser.role === 'normal') {
        this.router.navigate(['']); // Redirect to home page
      } else if (authenticatedUser.role === 'admin') {
        this.router.navigate(['/blog']); // Redirect to admin page
      }
    } else {
      // Handle authentication failure
      alert('Authentication failed. Please check your email and password.');
    }
    
    // alert(`email: ${this.fc['email'].value}, password: ${this.fc['password'].value}`)
    // this.router.navigate(['']);
  }
}
