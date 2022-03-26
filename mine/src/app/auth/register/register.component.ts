import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/user-service.service';
import { NgForm } from '@angular/forms';

export interface CreateDto {
  username: string, email: string, password: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  

  constructor(private userService: UserServiceService) { }
  ngAfterViewInit(): void {
    
  }
  @ViewChild('myRegister') myRegister!: NgForm;

  ngOnInit(): void {
    
  }
 
//handleRegister(): void{
//  const {username, email, password} = this.myRegister.value;
//  console.log(this.myRegister.value)
//  const body : CreateDto = {
//    username: username,
//    email: email,
//    password: password,
//  }
//is.userService.register(body).subscribe(data=>{
//console.log(data)
//
//
//}
}
