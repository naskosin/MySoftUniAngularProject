import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/core/gallery.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { IFish, IUser } from 'src/app/core/interfaces';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user.service';
import { CreateCatchService } from 'src/app/core/create-catch.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-galler-details',
  templateUrl: './galler-details.component.html',
  styleUrls: ['./galler-details.component.css']
})
export class GallerDetailsComponent implements OnInit {
fish!: IFish;
id!: string;
user! :IUser;

  constructor(private galleryService: GalleryService, private activeSnapshot: ActivatedRoute, private userService: UserService, public createCatch: CreateCatchService, private router:Router) { }
    

  ngOnInit(): void {
    
      this.user = this.userService.currentUser;
    this.id = this.activeSnapshot.snapshot.params['fishid'];
    this.galleryService.getCatchOne(this.id).subscribe(
      data=>{
        this.fish = data
      }
    )
    console.log(this.id)
  }
  deleteHandler(){
    console.log('Hi')
    this.id = this.activeSnapshot.snapshot.params['fishid'];
    const token:string = this.userService.currentUser.accessToken;
   let header = new HttpHeaders({'X-Authorization': token})
   confirm("Are you sure to delete?")
    this.createCatch.deleteCatch(this.id, {headers: header}).subscribe(data=>this.router.navigate(['/gallery']))
  }
  }

