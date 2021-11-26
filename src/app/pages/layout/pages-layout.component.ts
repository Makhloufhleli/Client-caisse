import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/entities/user';
import { TokenStorageService } from 'src/app/model/services/auth/token-storage.service';

@Component({
  selector: 'app-pages-layout',
  templateUrl: './pages-layout.component.html'
})
export class PagesLayoutComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn?: boolean;
  username?: string;

  //showGuideBoard = false;
  showUserBoard = false;

  currentUser!: User;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.tokenStorageService.getToken != null){
      this.currentUser = new User();
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorageService.getUser();
      this.roles = this.currentUser.roles;
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.username = this.currentUser.username;
    }else{
      this.router.navigate(["/auth/signin"]);
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(["/auth/signin"]);
  }

}
