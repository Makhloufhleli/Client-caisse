import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/entities/user';
import { AuthService } from 'src/app/model/services/auth/auth.service';
import { TokenStorageService } from 'src/app/model/services/auth/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  user!: User;
  message!: string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.user = new User();
  }


  login() {
    this.authService.login(this.user).subscribe(data => {
      if (data.user) {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.user);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.toastr.success(data.message)
        this.navigateToHome();
      }else{
        this.toastr.error(data.message)
      }
    },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.toastr.error("Cannot connect to the server!")
      })
  }

  navigateToHome() {
    this.router.navigate(["/pages/home"])
  }

}
