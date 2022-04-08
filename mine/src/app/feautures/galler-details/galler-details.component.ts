import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/core/gallery.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { IFish, IUser, IComment } from 'src/app/core/interfaces';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user.service';
import { CreateCatchService } from 'src/app/core/create-edit-delete-catch.service';
import { HttpHeaders } from '@angular/common/http';
import { NgForm , NgModel} from '@angular/forms';
import { CommentService } from 'src/app/core/comment.service';

@Component({
  selector: 'app-galler-details',
  templateUrl: './galler-details.component.html',
  styleUrls: ['./galler-details.component.css']
})
export class GallerDetailsComponent implements OnInit {
fish!: IFish;
id!: string;
user! :IUser;
email!: string;
comments!: IComment[];

  constructor(private galleryService: GalleryService, private activeSnapshot: ActivatedRoute, private commentService: CommentService,private userService: UserService, public createCatch: CreateCatchService, private router:Router) { }
    

  ngOnInit(): void {
    
      this.user = this.userService.currentUser;
    this.id = this.activeSnapshot.snapshot.params['fishid'];
    this.galleryService.getCatchOne(this.id).subscribe(
      data=>{
        this.fish = data
      }
    )
    const id = this.activeSnapshot.snapshot.params['fishid'];
    this.commentService.getComment().subscribe(data => {
     
      this.comments=Object.values(data).filter(x=>id===x.themeId);
    
   } )
  }
  deleteHandler(){
    console.log('Hi')
    const id:string = this.activeSnapshot.snapshot.params['fishid'];
    console.log(id)
    const token:string = localStorage.getItem('Token');
   let header = new HttpHeaders({'X-Authorization': token})
   confirm("Are you sure to delete?")
    this.createCatch.deleteCatch(id, {headers: header}).subscribe(data=>{console.log(data)});
    setTimeout(()=>{
      this.router.navigate(['/gallery']); },1000)  

  }
  formHandler(createPostForm: NgForm): void{
    this.id = this.activeSnapshot.snapshot.params['fishid'];
    const token:string = localStorage.getItem('Token');
   let header = new HttpHeaders({'X-Authorization': token});
   const id: string = this.userService.currentUser._id;
  const email: string = this.userService.currentUser.email;
  const {comment} = createPostForm.value;
this.commentService.createComment({comment: comment,  email, themeId: this.id},{headers: header}).subscribe(
  data=>{console.log(Object.values(data))
  }
)
this.router.navigate([`gallery/fish/${this.id}`]) }
deleteComment(id:string){
  const token:string = localStorage.getItem('Token');
   let header = new HttpHeaders({'X-Authorization': token});
  this.commentService.deleteComment(id, {headers:header}).subscribe(data=>console.log("Delete"));
  this.router.navigate([`gallery`])
}
//editComment(id:string) {
//  if(!!id){
//return false;
//  }
// return true;
//
//}

  }
  

