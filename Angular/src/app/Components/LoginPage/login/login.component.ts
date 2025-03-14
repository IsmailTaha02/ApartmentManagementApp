import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Call API or handle authentication here
  }
}
