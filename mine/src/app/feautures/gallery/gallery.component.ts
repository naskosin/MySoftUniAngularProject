import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../core/gallery.service';
import { IFish } from '../../core/interfaces';

import { UserService } from 'src/app/core/user.service';

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
        this.fishes = Object.values(data).sort((a, b)=>{
          return b.weight-a.weight
        });
        console.log(data);
        console.log(this.userService.currentUser)
      }
    )
  }

}
