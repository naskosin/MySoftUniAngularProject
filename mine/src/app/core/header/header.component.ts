import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../interfaces';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private userService: UserService) {

   }

  ngOnInit(): void {
    console.log(this.userService.currentUser)
  }
 get isLogged(): boolean{
    return this.userService.isLogged;
  }
  get currentUser(): IUser{
    if(!!!this.userService.currentUser){
      localStorage.removeItem('Token');
      localStorage.setItem('isLogged', 'false');
      
    }
    return this.userService.currentUser;
  }
  Logout():void{
 const token:string = this.userService.currentUser.accessToken;
 let header = new HttpHeaders({'X-Authorization': token})
 this.userService.logOut({headers: header}).subscribe(data=>this.userService.currentUser=data);


    return ;

  }
}
