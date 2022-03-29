import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/core/gallery.service';
import { ActivatedRoute } from '@angular/router';
import { IFish, IUser } from 'src/app/core/interfaces';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-galler-details',
  templateUrl: './galler-details.component.html',
  styleUrls: ['./galler-details.component.css']
})
export class GallerDetailsComponent implements OnInit {
fish!: IFish;
id!: string;
user! :IUser;

  constructor(private galleryService: GalleryService, private activeSnapshot: ActivatedRoute, private userService: UserService) { }
    

  ngOnInit(): void {
    setTimeout(()=>{
      this.user = this.userService.currentUser;
    this.id = this.activeSnapshot.snapshot.params['fishid'];
    this.galleryService.getCatchOne(this.id).subscribe(
      data=>{
        this.fish = data
      }
    )
    console.log(this.id)
  }, 15)

  }
}
