import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/user-service.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { passwordMatch } from '../utils';

export interface CreateDto {
  username: string, email: string, password: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {



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

  constructor(private userService: UserServiceService, private formBuilder: FormBuilder) { }
  ngAfterViewInit(): void {
    
  }
  handleRegister(): void{
    return
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
