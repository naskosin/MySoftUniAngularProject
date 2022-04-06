import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../core/gallery.service';
import { IFish } from '../../core/interfaces';

import { UserService } from 'src/app/core/user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
fishes!: IFish[]
  constructor(private galleryService: GalleryService, private userService: UserService) { }

  ngOnInit(): void {
    this.galleryService.gettopFive().subscribe(
      data=>{
        this.fishes = data;
        console.log(data);
        console.log(this.userService.currentUser)
      }
    )
    const token:string = this.userService.currentUser.accessToken;
    let header = new HttpHeaders({'X-Authorization': token});
      this.userService.singleUser({headers:header}).subscribe(user=>console.log(user))


  }

}
