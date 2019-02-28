// this file will navigate to dashbord after login
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails: FormGroup;
  constructor(private fb: FormBuilder, private myRoute: Router) { }

  ngOnInit() {
    this.loginDetails = this.fb.group({
      email: ['bhumi@gmail.com', Validators.required],
      password: ['bhumi@123', Validators.required]
    });
  }


  /**
   * Determines whether submit on
   * and after submit it will navigate to dashboard
   */
  onSubmit() {
    if (this.loginDetails.valid) {
      console.log('inside', this.loginDetails.value.emailId);
      this.myRoute.navigate(['dashboard']);

    }
  }

}
