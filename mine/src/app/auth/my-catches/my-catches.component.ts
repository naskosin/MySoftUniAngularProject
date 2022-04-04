import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';
import { IUser, IFish } from 'src/app/core/interfaces';
import { GalleryService } from 'src/app/core/gallery.service';

@Component({
  selector: 'app-my-catches',
  templateUrl: './my-catches.component.html',
  styleUrls: ['./my-catches.component.css']
})
export class MyCatchesComponent implements OnInit {
fishes!: IFish[]
user!: IUser;
  constructor(private userService: UserService, private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.user = this.userService.currentUser
    const id = this.user._id
    this.galleryService.getAllCatches$().subscribe(
      data=>{
        this.fishes = data.filter(x=>x._ownerId === id);
        console.log(this.fishes.length);
        console.log(this.userService.currentUser)
  })
}
  //get currentUser(): IUser{
  //  return this.userService.currentUser
  //}
  
}
