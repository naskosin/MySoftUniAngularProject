import { Component, OnInit, } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';
import { Router } from '@angular/router';

export interface CreateDto {
  username: string, email: string, password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

errorMessage!: string;

loginFormGroup: FormGroup = this.formBuilder.group({
  'email': new FormControl(null, [Validators.required, Validators.email]),
  'password': new FormControl('', [Validators.required, Validators.minLength(6)])
})
 
  constructor(private authservice: AuthService, private userService: UserService, private formBuilder: FormBuilder, private router: Router) { 

  }
  ngOnInit(): void {
   
  }
 
loginHandler():void{
 this.errorMessage = '';
const {email, password} = this.loginFormGroup.value;
const body ={
  email: email,
  password: password
};
this.userService.login(body).subscribe({
  next: (data)=>{
    localStorage.setItem("Token", data.accessToken)
    localStorage.setItem("isLogged", 'true')
this.router.navigate(['/home'])

  },
 error: (err)=>{this.errorMessage = err.error.message}}
 
);
}
}