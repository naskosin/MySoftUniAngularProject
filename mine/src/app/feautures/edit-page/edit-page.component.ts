import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  constructor(private userService: UserService,private activeSnapshot: ActivatedRoute) { }

  ngOnInit(): void {
  }
  formHandler(createCatchForm: NgForm):void{
    //this.id = this.activeSnapshot.snapshot.params['fishid'];
    //const token:string = this.userService.currentUser.accessToken;
    //let header = new HttpHeaders({'X-Authorization': token})
    //
    //this.createService.createCatch(createCatchForm.value, {headers:header}).subscribe((data)=>{
    //  console.log(data, "Hi")
    //})
    //console.log(createCatchForm.value)
   }
}
