import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { passwordMatch } from '../utils';

export interface CreateDto {username: string,
  email: string, password: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{



  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)])

  get passwordsGroup() : FormGroup{
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }
  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'passwords': new FormGroup({
    'password': this.passwordControl,
    'rePassword': new FormControl(null, [passwordMatch(this.passwordControl)])
  })
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }
  
  handleRegister(): void{
    const {email, passwords} = this.registerFormGroup.value;
    console.log(this.registerFormGroup.value);

    const body: CreateDto={
      username: "Hans",
      email: email,
      password: passwords.password
    };
    this.userService.register(body).subscribe((data)=>console.log(data))
  }

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
