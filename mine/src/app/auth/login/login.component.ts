import { Component, OnInit, } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/core/user-service.service';

export interface CreateDto {
  username: string, email: string, password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

loginFormGroup: FormGroup = this.formBuilder.group({
  'email': new FormControl('', [Validators.required, Validators.email]),
  'password': new FormControl('', [Validators.required, Validators.minLength(6)])
})
  constructor(private authservice: AuthService, private userService: UserServiceService, private formBuilder: FormBuilder) { 

  }
  ngOnInit(): void {
   
  }
 
  //ngOnInit(): void {
  //  this.email = "peter@abv.bg";
  //  this.password = "123456";
  //  
  //  this.authservice.login(this.email, this.password).subscribe(data=>{
  //    console.log(data)
  //  })
  //}
  loginHandler():void{
console.log(this.loginFormGroup.value)
  }
}
