import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/model/services/auth/token-storage.service';
import { UserService } from 'src/app/model/services/user/user.service';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {

  constructor(
    private userService: UserService,
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.getUserPage()
  }

  getUserPage(){
    this.userService.getAdminBoard().subscribe(data=>{
      console.log(JSON.parse(data).message);
    })
  }

}
