import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';
import { CreateCatchService } from 'src/app/core/create-catch.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-create-catch',
  templateUrl: './create-catch.component.html',
  styleUrls: ['./create-catch.component.css']
})
export class CreateCatchComponent implements OnInit, AfterViewInit {
  @ViewChild('myForm') myForm!: NgForm;

  constructor(private userService: UserService, private createService: CreateCatchService, ) { }
  ngAfterViewInit(): void {
    
  }
  // httpOptions = {
  //  headers: new HttpHeaders({
  //    
  //  })
  //};
  
  ngOnInit(): void {
  }
  formHandler(createCatchForm: NgForm):void{
   const token:string = this.userService.currentUser.accessToken;
   let header = new HttpHeaders({'X-Authorization': token})
   
   

   
   console.log(header)
   this.createService.createCatch(createCatchForm.value, {headers:header}).subscribe((data)=>{
     console.log(data, "Hi")
   })
   console.log(createCatchForm.value)
  }
}
