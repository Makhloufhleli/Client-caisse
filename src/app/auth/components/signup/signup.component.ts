import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/entities/user';
import { AuthService } from 'src/app/model/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  user!: User;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = new User();
  }

  signUp(){
    this.authService.register(this.user).subscribe(data=>{
      console.log(data.message)
      this.toastr.success(data.message)
      this.redirectToLogin();
    }, err=>{
      this.toastr.error("An error has been occured, try again!");
    })
  }
  redirectToLogin(){
    this.router.navigate(['/auth/login']);
  }

}
