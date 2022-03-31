import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private userService: UserService) {

   }

  ngOnInit(): void {
    console.log(this.userService.isLogged)
  }
 get isLogged(): boolean{
    return this.userService.isLogged;
  }
  get currentUser(): IUser{
    return this.userService.currentUser
  }
  Logout():void{
    return localStorage.removeItem("Token")
  }
}
