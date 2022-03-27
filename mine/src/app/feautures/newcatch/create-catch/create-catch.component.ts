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
  formHandler():void{
    const token:string = this.userService.currentUser.accessToken;
    let header = new HttpHeaders().set("X-Authorization", token)
    
    console.log("Hi")
    this.createService.createCatch({species: "trout", img: 'https://www.algomacountry.com/wp-content/uploads/2015/09/brook-trout-photo6.jpg', _id:"847ec027-f659-4086-8032-5173e2f9c93a", weight: 9}, {headers:header}).subscribe((data)=>{
      console.log(data, "Hi")
    })
  }
}
